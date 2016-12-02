sap.ui.define([
		"sap/m/Text",
		"sap/ui/demo/orderbrowser/model/formatter"
	], function (Text, formatter) {
		"use strict";

		QUnit.module("formatter - Currency value");

		function currencyValueTestCase(assert, sValue, fExpectedNumber) {
			// Act
			var fCurrency = formatter.currencyValue(sValue);

			// Assert
			assert.strictEqual(fCurrency, fExpectedNumber, "The rounding was correct");
		}

		QUnit.test("Should round down a 3 digit number", function (assert) {
			currencyValueTestCase.call(this, assert, "3.123", "3.12");
		});

		QUnit.test("Should round up a 3 digit number", function (assert) {
			currencyValueTestCase.call(this, assert, "3.128", "3.13");
		});

		QUnit.test("Should round a negative number", function (assert) {
			currencyValueTestCase.call(this, assert, "-3", "-3.00");
		});

		QUnit.test("Should round an empty string", function (assert) {
			currencyValueTestCase.call(this, assert, "", "");
		});

		QUnit.test("Should round a zero", function (assert) {
			currencyValueTestCase.call(this, assert, "0", "0.00");
		});

		QUnit.module("formatter - Binary Content");

		QUnit.test("The type metadata is prepended  to the image string when binary date is passed to the formatter", function (assert) {
			var sResult = formatter.handleBinaryContent("binaryData");
			assert.strictEqual(sResult, "data:image/jpeg;base64,", "Test Success");
		});

		QUnit.test("calling the formatter with no picture content returns the default picture URL", function (assert) {
			var sResult = formatter.handleBinaryContent("");
			assert.strictEqual(sResult, "../images/Employee.png", "Test Success");
		});
	}
);