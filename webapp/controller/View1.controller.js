sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("COM.SAPSAMPLEDEM1.controller.View1", {

		onInit: function() {

			var data = {};

			var colData = [

				{
					colName: "Attr1"
				},

				{
					colName: "Attr2"
				},

				{
					colName: "Attr3"
				}
			]

			var rowData = [

				{
					Attr1: "Mat1",
					Attr2: "Mat2",
					Attr3: "MAt3"
				},

				{
					Attr1: "Mat11",
					Attr2: "Mat22",
					Attr3: "MAt33"
				}
			]

			data.colData2 = [];

			data.colData2.push({
				colName: ""
			})

			data.rowData2 = [];

			for (var i = 0; i < rowData.length; i++)

			{

				data.colData2.push({
					colName: ""
				})

			}

			for (var i in colData) {

				var cName, obj = {};

				for (var j = 0; j < rowData.length; j++)

				{

					cName = colData[i]["colName"];

					obj[cName + j] = rowData[j][cName];

				}

				obj["colName"] = cName;

				data.rowData2.push(obj);

			}

			var oModel = new sap.ui.model.json.JSONModel(data);

			this.getView().setModel(oModel, "DT");

		},

		productListFactory: function(sId, oContext) {

			var oUIControl = [];

			var sObj = oContext.getObject();

			oUIControl.push(new sap.m.Label({
				text: sObj.colName
			}));

			for (var i in sObj) {

				if (i == "colName")

				{

					continue;

				}

				oUIControl.push(new sap.m.Label({
					text: sObj[i]
				}));

			}

			return new sap.m.ColumnListItem({
				cells: oUIControl
			});

		},

	});
});