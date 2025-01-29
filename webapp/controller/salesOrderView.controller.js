sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
function (Controller) {
    "use strict";

    return Controller.extend("app.salesorderdisplaybatch12.controller.salesOrderView", {
        onInit: function () {

        },
        onKeySelect:function(oEvent){
            var key=oEvent.getParameter("selectedItem").mProperties.key
 
            var oModel=this.getOwnerComponent().getModel();
         //    0100000003
         var entity="/BusinessPartnerSet('" + key + "')/ToSalesOrder"
         var that =this;
         oModel.read(entity,{
            // urlParameters: {
                // "$top": "0",                    
                // "$skip": "1",  },
            success:function(odata, res){
 
                     var oModel=new sap.ui.model.json.JSONModel(odata)
                         that.getView().setModel(oModel,"danModel")
                        
                 },
                 error:function(error){
                   if(error.statusCode=="404" || error.statusText=="Not Found"){
                    sap.m.MessageBox.alert(error.message)
                   }

                 }
 
 
 
 
         })
            
 
         }
 
 
 
    });
});
