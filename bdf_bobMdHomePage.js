function navigateToProductsList(){


// var globalContext = parent.Xrm.Utility.getGlobalContext();
// var link=globalContext.getCurrentAppUrl();
// var entityId="3800c0b1-e7ae-4b86-b75f-f59f99cd8c0b"
const pageInput={
pageType: "entitylist",
entityName: "bdf_projects",
viewId:"123555d9-1347-4eba-8332-6c6e7a2d8120",
viewType:"1039"}

parent.Xrm.Navigation.navigateTo(pageInput).then(successCallback,errorCallback);



}
    
function navigateToSubProductsList(){
    // var globalContext = parent.Xrm.Utility.getGlobalContext();
    // var link=globalContext.getCurrentAppUrl();
    // var entityId="3800c0b1-e7ae-4b86-b75f-f59f99cd8c0b"
    const pageInput={
        pageType: "entitylist",
        entityName: "bdf_generics"}

    parent.Xrm.Navigation.navigateTo(pageInput).then(successCallback,errorCallback);
    } 