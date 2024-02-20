function addOnSubproductGridLoad(exeCutionContext){

    debugger; 

    var formContext=exeCutionContext.getFormContext();

    formContext.getControl("bdf_unique_genericGride").addOnLoad(function(exeCutionContext){

        var formContext=exeCutionContext.getFormContext();
        var totalGridRecords=formContext.getControl("bdf_unique_genericGride").getGrid().getRows();

        for(var i=0;i<totalGridRecords.getLength();i++){

            var gridSingleRow=totalGridRecords.get(i);
            gridSingleRow.getAttribute("bdf_name").addOnChange(function(exeCutionContext){
                
                var formContext=exeCutionContext.getFormContext()
             
                let subProductName=formContext.getAttribute("bdf_name").getValue();

                if(subProductName==null){
                    return;
                }else{
                     console.log(subProductName)
                }
            })

        }
    });
   
}



function addCatgoryGridOnLoad(exeCutionContext){

    debugger;

    var formContext=exeCutionContext.getFormContext();
    formContext.getControl("Catogry").addOnLoad(function(exeCutionContext){

       var formContext=exeCutionContext.getFormContext();

        var grideTotalRows=formContext.getControl("Catogry").getGrid().getRows();

        for(var i=0;i<grideTotalRows.getLength();i++)
        {

            var grideSingleRow=grideTotalRows.get(i);
            grideSingleRow.getAttribute("bdf_name").addOnChange(function(exeCutionContext){
                var formContext=exeCutionContext.getFormContext();

                let catogryName=formContext.getAttribute("bdf_name").getValue();

                if(catogryName==null){
                    return
                }else{
                    console.log(catogryName);
                }
            })
        }
    });
}

