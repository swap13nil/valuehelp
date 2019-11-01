sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/ColumnListItem",
	"sap/m/Label",
	"sap/m/Token"
], function (Controller , JSONModel, ColumnListItem, Label, Token) {
	"use strict";

	return Controller.extend("value.valueHelp.controller.help", {
			onInit: function () {
			this._oInput = this.getView().byId("Input");
			this._oInput.setSelectedKey("HT-1001");
			this.oColModel = new JSONModel("model/columnsModel.json");
			this.oProductsModel = new JSONModel("model/products.json");
			this.oQuantity = new JSONModel("model/Quantity.json");
		},

		onValueHelpRequested: function() {
		
        	
        		var odiloge1 = sap.ui.xmlfragment("value.valueHelp.view.quantity", this);
        		this.getView().addDependent(odiloge1);
			   
			     odiloge1.bindAggregation("items" , {
			     	path:"product>/ProductCollection",
			     	template : new sap.m.StandardListItem({
			     		
			     		title:"{product>ProductId}"
			     	})
			     });
			
  odiloge1.open();
        },

		onValueHelpOkPress: function (oEvent) {
	   
var Otitle = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("Input");
	     this._oInput.setValue(Otitle);
		},

	
        
        
        
        onValueRequestForQuant: function (oEvent){
        	
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
	});
});