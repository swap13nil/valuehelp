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
			var aCols = this.oColModel.getData().cols;

			this._oValueHelpDialog = sap.ui.xmlfragment("value.valueHelp.view.valueHelp", this);
			this.getView().addDependent(this._oValueHelpDialog);

			
			this._oValueHelpDialog.getTableAsync().then(function (oTable) {
				oTable.setModel(this.oProductsModel);
				oTable.setModel(this.oColModel, "columns");

				if (oTable.bindRows) {
					oTable.bindAggregation("rows", "/ProductCollection");
				}

				if (oTable.bindItems) {
					oTable.bindAggregation("items", "/ProductCollection", function () {
						return new ColumnListItem({
							cells: aCols.map(function (column) {
								return new Label({ text: "{" + column.template + "}" });
							})
						});
					});
				}

				this._oValueHelpDialog.update();
			}.bind(this));

			var oToken = new Token();
			oToken.setKey(this._oInput.getSelectedKey());
			oToken.setText(this._oInput.getValue());
			this._oValueHelpDialog.setTokens([oToken]);
			this._oValueHelpDialog.open();
		},

		onValueHelpOkPress: function (oEvent) {
	   
			var aTokens = oEvent.getParameter("tokens");
			this._oInput.setSelectedKey(aTokens[0].getKey());
			this._oValueHelpDialog.close();
	
		},

		onValueHelpCancelPress: function () {
			this._oValueHelpDialog.close();
		},

		onValueHelpAfterClose: function () {
			this._oValueHelpDialog.destroy();
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