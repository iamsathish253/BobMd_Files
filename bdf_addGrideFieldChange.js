function addOnGrideFieldChange(exeCutionContext){

    debugger;
        
    var formContext=exeCutionContext.getFormContext();
    var gride=formContext.getControl("bdf_unique_genericGride");
      
     
    if (gride == null) {
        setTimeout(addOnGrideFieldChange(exeCutionContext), 3000);
        return;
    }


    formContext.getControl("bdf_unique_genericGride").addOnLoad(addOnGideLoad);
   
}

function addOnGideLoad(exeCutionContext){

  
    var formContext=exeCutionContext.getFormContext();
    // var collection=formContext.getControl("bdf_unique_genericGride").getGrid().getRows();


    var gridRows=formContext.getControl("bdf_unique_genericGride").getGrid().getRows();

    var TotalRows=gridRows.getLength();

    if(TotalRows==null){
        return;
    }
    console.log(TotalRecords)

    for (let index = 0; index < TotalRecords; index++) {
        const singleRow = gridRows.get(index);

        singleRow.getAttribute("bdf_name").addOnChange(addOnChangeAttribute);

        
    }

    // formContext.getControl("bdf_unique_genericGride").getGrid().getRows().getAll().forEach(function (row, i)
    // {
    //     var name = row.getAttribute("bdf_name").getValue();
    //     console.log(name)

    //     var rowId=row.getData().getEntity().getId();

    //     console.log(rowId)

    //     // var EntityName=row.getEntityName();

    //     //var name=EntityName.getAttribute("bdf_name").getValue()
        
    //     // console.log(EntityName)

        
    // });

}


function addOnChangeAttribute(exeCutionContext){

   var formContext=exeCutionContext.getFormContext();

   var projectName =formContext.getAttribute("bdf_name").getValue();

   if(projectName==null){
    return;

   }
   
   if(projectName=="Sathish")
   {
    formContext.getAttribute("bdf_item").setValue(name);
   }else{
    return;
   }
   
  

 


}


