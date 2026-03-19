define("UsrPage_2r36u49", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_ev755zq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentDS_UsrProject_zhnqjqx",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrProject_zhnqjqx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_unnd6xu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_unnd6xu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ev755zq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_us9ygc9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentDS_UsrDocType_51bzc8y",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrDocType_51bzc8y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_01i19fn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_01i19fn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_us9ygc9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zyu7z13",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentDS_UsrIssue_4uhc58f",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrIssue_4uhc58f",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_d9iyuqq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_d9iyuqq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zyu7z13",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_wm6andk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrDocumentDS_UsrName_i9w1u9p",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrName_i9w1u9p"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_ba6xgj3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentDS_UsrOwner_qc8syqr",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrOwner_qc8syqr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_3kispkw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3kispkw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ba6xgj3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebInput_6grzudt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.WebInput",
					"label": "$Resources.Strings.UsrDocumentDS_UsrFileURL_8i9czxy",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrFileURL_8i9czxy"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_i324ch9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentDS_UsrRelatedEpic_yemz3r6",
					"labelPosition": "above",
					"control": "$UsrDocumentDS_UsrRelatedEpic_yemz3r6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrDocumentDS_UsrDocType_51bzc8y": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrDocType"
						}
					},
					"UsrDocumentDS_UsrIssue_4uhc58f": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrIssue"
						}
					},
					"UsrDocumentDS_UsrName_i9w1u9p": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrName"
						}
					},
					"UsrDocumentDS_UsrOwner_qc8syqr": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrOwner"
						}
					},
					"UsrDocumentDS_UsrRelatedEpic_yemz3r6": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrRelatedEpic"
						}
					},
					"UsrDocumentDS_UsrFileURL_8i9czxy": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrFileURL"
						}
					},
					"UsrDocumentDS_UsrProject_zhnqjqx": {
						"modelConfig": {
							"path": "UsrDocumentDS.UsrProject"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrDocumentDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrDocument"
							}
						}
					},
					"primaryDataSourceName": "UsrDocumentDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
{
    request: "crt.LoadDataRequest",
    handler: async (request, next) => {
        // filter the contact lookup for the account
                     
        if(request.dataSourceName !== "ComboBox_i324ch9") {
            return await next?.handle(request);
        }
 
        // get the account                  
        const account = await request.$context.ComboBox_i324ch9;
        if (account) {
            const filter = new sdk.FilterGroup();
            await filter.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrDocType", "Epic");
 
            // note, these lines are only needed due to an issue with filters in Creatio-DevKit SDK
            // expected to be fixed in Creatio 8.1
            const newFilter = Object.assign({}, filter);
            newFilter.items = filter.items;
 
            request.parameters.push({
                type: "filter",
                value: newFilter
            });
        }
                     
        return await next?.handle(request);
    }
}			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});