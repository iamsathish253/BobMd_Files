function navigateToProjectList(){


// var globalContext = parent.Xrm.Utility.getGlobalContext();
// var link=globalContext.getCurrentAppUrl();
// var entityId="3800c0b1-e7ae-4b86-b75f-f59f99cd8c0b"
var pageInput={
pageType: "entitylist",
entityName: "bdf_projects",}

parent.Xrm.Navigation.navigateTo(pageInput).then(successCallback,errorCallback);



}
    
function navigateToGenericList(){
    // var globalContext = parent.Xrm.Utility.getGlobalContext();
    // var link=globalContext.getCurrentAppUrl();
    // var entityId="3800c0b1-e7ae-4b86-b75f-f59f99cd8c0b"
    var pageInput={
        pageType: "entitylist",
        entityName: "bdf_generics"}
    parent.Xrm.Navigation.navigateTo(pageInput).then(successCallback,errorCallback);
    } 