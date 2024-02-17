function projectPostSave(exeCutionContext){
    debugger;

    var formContext=exeCutionContext.getFormContext();
    formContext.data.entity.addOnPostSave(createGenericRecords);
   
}

function createGenericRecords(exeCutionContext){

    debugger;

    //sample

    var formContext=exeCutionContext.getFormContext();

    var projectId=formContext.data.entity.getId().replace("{","").replace("}","");
    console.log(projectId)
    var projectName=formContext.getAttribute("bdf_projectname").getValue();
    //var projectEntity=formContext.data.entity.getEntityName();

    if(projectName==null || projectName=="" || projectId=="" || projectId==null){
        return;
    }

for (let index = 1; index <=6; index++) {

    var record = {};
    record["bdf_Projectr@odata.bind"] = "/bdf_projectses("+projectId+")"; // Lookup
    record.bdf_name = projectName + "-" + "GEN "+ "-" + "PID" + projectId; // Text
    
    Xrm.WebApi.createRecord("bdf_generics", record).then(
        function success(result) {
            var newId = result.id;
            console.log(newId);
        },
        function(error) {
            console.log(error.message);
        }
    );
        
           
           
}
        
    }
