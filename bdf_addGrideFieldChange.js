function addGrideFieldChange(exeCutionContext){

    debugger;

    var formContext=exeCutionContext.getFormContext();

    
    var gride=formContext.getControl("bdf_unique_genericGride");

    if(gride==null){
        setTimeout(addGrideFieldChange(exeCutionContext), 3000);
        return;
    }

    formContext.getControl("bdf_unique_genericGride").addOnLoad(gideLoad);

    


   
}

function gideLoad(exeCutionContext){

  

    var formContext=exeCutionContext.getFormContext();
    // var collection=formContext.getControl("bdf_unique_genericGride").getGrid().getRows();


    var collection=formContext.getControl("bdf_unique_genericGride").getGrid().getRows();

    var TotalRecords=collection.getLength();
    console.log(TotalRecords)

    for (let index = 0; index < TotalRecords; index++) {
        const element = collection.get(index);

        element.getAttribute("bdf_name").addOnChange(addChangeAttribute);

        
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


function addChangeAttribute(exeCutionContext){
   var formContext=exeCutionContext.getFormContext();

   var name =formContext.getAttribute("bdf_name").getValue();

   if(name=="Sathish")
   {
    formContext.getAttribute("bdf_item").setValue(name);
   }else{
    return;
   }
   

 


}


