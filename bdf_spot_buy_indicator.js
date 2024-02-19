function handleCheckboxChange(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();
    var checkboxField = formContext.getAttribute("bdf_spotbuyindicator");
    var subgrid = formContext.getControl("Subgrid_new_4");
 
    if (checkboxField && subgrid) {
        var isChecked = checkboxField.getValue();
        if (isChecked) {
            var toggleValue = true;
            var rpTypeValue = 1;
 
            var subgridRecords = subgrid.getGrid().getRows().get();
            var promises = [];
 
            for (var i = 0; i < subgridRecords.length; i++) {
                var record = subgridRecords[i];
                var subgridCheckbox = record.getData().getEntity().attributes.get("bdf_spotbuyindicator");
                var subgridRpType = record.getData().getEntity().attributes.get("bdf_rptype");
 
                if (subgridCheckbox) {
                    subgridCheckbox.setValue(toggleValue);
                }
 
                if (subgridRpType) {
                    subgridRpType.setValue(rpTypeValue);
                }
 
                // Update the record in the Dataverse
                var recordId = record.getData().getEntity().getId();
                var entityName = record.getData().getEntity().getEntityName();
 
                var data = {};
                data["bdf_spotbuyindicator"] = toggleValue;
                data["bdf_rptype"] = rpTypeValue;
 
                var promise = Xrm.WebApi.updateRecord(entityName, recordId, data);
                promises.push(promise);
            }
 
            Promise.all(promises)
                .then(function success(results) {
                    console.log("Subgrid changes saved successfully.");
                    subgrid.refresh();
                })
                .catch(function error(error) {
                    console.log("Error saving subgrid changes: " + error.message);
                });
 
            // Update the parent record in the Dataverse
            var parentRecordId = formContext.data.entity.getId();
            var parentEntityName = formContext.data.entity.getEntityName();
 
            var parentData = {};
            parentData["bdf_spotbuyindicator"] = toggleValue;
            parentData["bdf_rptype"] = 1;
 
            Xrm.WebApi.updateRecord(parentEntityName, parentRecordId, parentData)
                .then(function success(result) {
                    console.log("Parent record updated successfully in the Dataverse.");
                })
                .catch(function error(error) {
                    console.log("Error updating parent record in the Dataverse: " + error.message);
                });
        }
    }
}
 