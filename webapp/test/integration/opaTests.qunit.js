/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"value/valueHelp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});