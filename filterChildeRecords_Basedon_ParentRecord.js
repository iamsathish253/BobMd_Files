function filterChildRecord_of_Parent(exeCutionContext){
    debugger;


    var formContext=exeCutionContext.getFormContext();
    formContext.getControl("bdf_contact").addPreSearch(function(exeCutionContext){

        var formContext=exeCutionContext.getFormContext();
        var accountlookUp=formContext.getAttribute("bdf_account").getValue();
        if(accountlookUp!=null)
        {
        var accountName=accountlookUp[0].name;
        var accountId=accountlookUp[0].id;

        var filterQurey="<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>"+
        "<entity name='contact'>"+
        "<attribute name='fullname'/>"+
        "<attribute name='parentcustomerid'/>"+
        "<attribute name='telephone1'/>"+
        "<attribute name='emailaddress1'/>"+
        "<attribute name='contactid'/>"+
        "<order attribute='fullname' descending='false'/>"+
        "<filter type='and'>"+
        "<condition attribute='parentcustomerid' operator='eq' uiname='"+accountName+"' uitype='account' value='"+accountId+"'/>"+
        "</filter>"+
        "</entity>"+
        "</fetch>"

        formContext.getControl("bdf_contact").addCustomFilter(filterQurey, "contact")
        }else{
            return;
        }


    })
}