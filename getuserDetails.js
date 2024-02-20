function callApiuserasaUpdatePrivilage(executionContext){
    debugger;

    var formContext=executionContext.getFormContext();
    var formType = formContext.ui.getFormType();

    formContext.ui.tabs.get("tab_3").addTabStateChange(function(executionContext){

        //var referencePanelTab=executionContext.ui.tabs.get("tab_3").getDisplayState();

       // if()

        var formType =executionContext.ui.getFormType();
        

        if(formType==3){
          var alertStrings = { confirmButtonLabel: "Ok", text: "You Don't have a Update Permission to Update a Record ", title: "Error PopUp" };
          var alertOptions = { height: 120, width: 260 };
          Xrm.Navigation.openAlertDialog(alertStrings, alertOptions)
        }else
        {
        let currentRecordId=formContext.data.entity.getId().replace("{","").replace("}","");
        const updateAtrributes = {};
        updateAtrributes.statecode = 1;
    
    Xrm.WebApi.online.updateRecord("bdf_projects", ""+currentRecordId+"", updateAtrributes).then(
        function success(result) {
            var updatedEntityId = result.id;
            console.log(updatedEntityId)
        },
        function(error) {
            Xrm.Utility.alertDialog(error.message);
        }
    );
        }
    


    });



    


}