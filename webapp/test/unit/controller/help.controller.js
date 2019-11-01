/*global QUnit*/

sap.ui.define([
	"value/valueHelp/controller/help.controller"
], function (Controller) {
	"use strict";

	QUnit.module("help Controller");

	QUnit.test("I should test the help controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});