sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/ColumnListItem",
	"sap/m/Label",
	"sap/m/Token"
], function (Controller , JSONModel, ColumnListItem, Label, Token) {
	"use strict";
var oName = "Somenthing";
	return Controller.extend("value.valueHelp.controller.help", {

   
			onInit: function () {
		
			this.oColModel = new JSONModel("model/columnsModel.json");
			this.oProductsModel = new JSONModel("model/products.json");
			this.oQuantity = new JSONModel("model/Quantity.json");
			
		},
	

		onValueHelpRequested: function(oEvent) {
		var Oid = oEvent.getParameters().id.split('--')[2];
	  
        	oName = Oid;
        	
        
        		var odiloge1 = sap.ui.xmlfragment("value.valueHelp.view.quantity", this);
        		this.getView().addDependent(odiloge1);
			   if(Oid === "Input"){
			     odiloge1.bindAggregation("items" , {
			     	path:"product>/ProductCollection",
			     	template : new sap.m.StandardListItem({
			     		
			     		title:"{product>ProductId}"
			     	})
			     });
			
  odiloge1.open();
        }
			else{
				      		var diloge = sap.ui.xmlfragment("value.valueHelp.view.quantity", this);
        		this.getView().addDependent(diloge);
			   
			     diloge.bindAggregation("items" , {
			     	path:"quant>/Quant",
			     	template : new sap.m.StandardListItem({
			     		
			     		title:"{quant>Quantity}"
			     	})
			     });
			
  diloge.open();
			}
		},

		onValueHelpOkPress: function (oEvent) {
if(oName === "Input") {
var Otitle = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("Input");
	     this._oInput.setValue(Otitle);
		}
		
		else {
			
			var Otitle1 = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("input0");
	     this._oInput.setValue(Otitle1);
			
			
		}}

	
        
        
        
       
	});
});