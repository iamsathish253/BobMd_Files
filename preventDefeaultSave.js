async function preventDefualt(executionContext){
    debugger;

    var formContext=executionContext.getFormContext();
    executionContext.getEventArgs().preventDefault();

    let ValidemobileNumber=formContext.getAttribute("bdf_mobilenumber").getValue();


    var recordGuid=[];

    await Xrm.WebApi.retrieveMultipleRecords("bdf_generics", "?$filter=bdf_mobilenumber eq '"+ValidemobileNumber+"'").then(
        async function success(results) {
            console.log(results);
            var totalGridRecords=results.entities.length;
            if(totalGridRecords==1){
                alert("Record Exit in DataBase")
            }else{
                formContext.data.entity.save();
            }
            
        },
        function(error) {
            console.log(error.message);
        }
    );

    
    }


    
   
