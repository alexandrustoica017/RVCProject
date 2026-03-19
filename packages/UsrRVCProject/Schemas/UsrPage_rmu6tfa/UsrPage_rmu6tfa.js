define("UsrPage_rmu6tfa", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_s8egrji",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrIssueDS_UsrIssueType_u4yov9y",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrIssueType_u4yov9y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_47or7ou",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_47or7ou_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_s8egrji",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_yjjmv5l",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrIssueDS_UsrOwner_w3ppa9d",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrOwner_w3ppa9d",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_jehkjs6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jehkjs6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yjjmv5l",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ear0hd3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrIssueDS_UsrItemType_5osykdk",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrItemType_5osykdk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ckonrs7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ckonrs7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ear0hd3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_c6344ng",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrIssueDS_UsrColumn18_4o5p19b",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrColumn18_4o5p19b",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_jmq6t35",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrIssueDS_UsrComplexity_8kdrmbj",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrComplexity_8kdrmbj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_lfdz8dy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lfdz8dy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jmq6t35",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_x6e3q7n",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrIssueDS_UsrMaturity_n57dbyc",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrMaturity_n57dbyc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_o0u7zyk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_o0u7zyk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_x6e3q7n",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_jqegg5b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrIssueDS_UsrExpectedDelivery_9ob5i9s",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrExpectedDelivery_9ob5i9s"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_720d4zr",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrIssueDS_UsrActualDeliveryTime_9f8bonw",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrActualDeliveryTime_9f8bonw"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ldc43px",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrIssueDS_UsrDueDate_0kzvzy9",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrDueDate_0kzvzy9"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ComboBox_y3lufkh",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrIssueDS_UsrStatus_imcc9nu",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrStatus_imcc9nu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "addRecord_1nxf5y0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1nxf5y0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_y3lufkh",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_4mfl6id",
				"values": {
					"type": "crt.RichTextEditor",
					"multiline": false,
					"label": "$Resources.Strings.UsrIssueDS_UsrDescription_l85qlz4",
					"labelPosition": "auto",
					"control": "$UsrIssueDS_UsrDescription_l85qlz4",
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 4
					},
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_dcnxxo3",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_dcnxxo3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_vkuhjdp",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_dcnxxo3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_okxh4sk",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_vkuhjdp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_j9j0rn8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_j9j0rn8_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrDocument",
							"defaultValues": [
								{
									"attributeName": "UsrProject",
									"value": "$Parameter_e701hww"
								},
								{
									"attributeName": "UsrIssue",
									"value": "$Id"
								},
								{
									"attributeName": "UsrOwner",
									"value": "$UsrIssueDS_UsrOwner_w3ppa9d"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_okxh4sk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_v493qgb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_v493qgb_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_u0igsptDS"
						}
					}
				},
				"parentName": "FlexContainer_okxh4sk",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_30l1v7k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_30l1v7k_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_okxh4sk",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_d8ktams",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_d8ktams_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_u0igspt"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_30l1v7k",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_i0yqgkl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_i0yqgkl_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrDocument"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_30l1v7k",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_tyx8hs5",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_tyx8hs5_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_tyx8hs5_GridDetail_u0igspt",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_u0igspt"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_tyx8hs5_SearchValue",
							"GridDetailSearchFilter_tyx8hs5_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_okxh4sk",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zj86qp9",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_dcnxxo3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u0igspt",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 5
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_u0igspt",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_u0igsptDS_Id",
					"columns": [
						{
							"id": "dd854983-8190-bf4c-8976-5f4590f2aac5",
							"code": "GridDetail_u0igsptDS_UsrName",
							"caption": "#ResourceString(GridDetail_u0igsptDS_UsrName)#",
							"dataValueType": 27,
							"width": 250
						},
						{
							"id": "81b9bf04-9399-27d9-5309-1db16bb581bf",
							"code": "GridDetail_u0igsptDS_UsrDocType",
							"caption": "#ResourceString(GridDetail_u0igsptDS_UsrDocType)#",
							"dataValueType": 10
						},
						{
							"id": "47a1a30c-a26b-3059-fef8-790a26fbb06c",
							"code": "GridDetail_u0igsptDS_UsrFileURL",
							"caption": "#ResourceString(GridDetail_u0igsptDS_UsrFileURL)#",
							"dataValueType": 44
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_zj86qp9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ey95sag",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ey95sag_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_dcnxxo3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_z2p8cvu",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ey95sag",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xwjfomt",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_z2p8cvu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_l215fqu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_l215fqu_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest"
					}
				},
				"parentName": "FlexContainer_xwjfomt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_311rhy2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_311rhy2_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							}
						}
					}
				},
				"parentName": "FlexContainer_xwjfomt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_auyx4vb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_auyx4vb_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_xwjfomt",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_178jlmr",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_178jlmr_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_auyx4vb",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7obsec3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7obsec3_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest"
					}
				},
				"parentName": "GridDetailSettingsBtn_auyx4vb",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_o0zk1ca",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_o0zk1ca_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [],
						"from": [
							"GridDetailSearchFilter_o0zk1ca_SearchValue",
							"GridDetailSearchFilter_o0zk1ca_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_xwjfomt",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DataGrid_gcx2u88",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_gcx2u88",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_gcx2u88DS_Id",
					"columns": [
						{
							"id": "9f5f9154-9f59-29a0-2e2c-60dbd28816d3",
							"code": "DataGrid_gcx2u88DS_UsrName",
							"caption": "#ResourceString(DataGrid_gcx2u88DS_UsrName)#",
							"dataValueType": 27,
							"width": 250
						}
					],
					"placeholder": false,
					"referenceSchema": "Document"
				},
				"parentName": "ExpansionPanel_ey95sag",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_h0uo85i",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_h0uo85i_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_0o646sj",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_0o646sj_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_h0uo85i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_7ufjwz1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_0o646sj",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zljn240",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7ufjwz1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9gygz6c",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9gygz6c_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrIssue",
							"defaultValues": [
								{
									"attributeName": "UsrProject",
									"value": "$Parameter_e701hww"
								},
								{
									"attributeName": "UsrParent",
									"value": "$Id"
								},
								{
									"attributeName": "UsrIssueType",
									"value": "c1607cd9-a588-4318-89fa-b0721dd88ba0"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_zljn240",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_r75bypx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_r75bypx_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_g6f24rxDS"
						}
					}
				},
				"parentName": "FlexContainer_zljn240",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_rzphj4x",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_rzphj4x_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_zljn240",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_rh6hh30",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_rh6hh30_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_g6f24rx"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rzphj4x",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_bp1etk1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_bp1etk1_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrIssue"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rzphj4x",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ld1ewv0",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ld1ewv0_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ld1ewv0_GridDetail_g6f24rx",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_g6f24rx"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ld1ewv0_SearchValue",
							"GridDetailSearchFilter_ld1ewv0_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_zljn240",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_hsdfqt1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_0o646sj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g6f24rx",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 14
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": false
						},
						"editable": {
							"enable": true,
							"itemsCreation": true,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_g6f24rx",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_g6f24rxDS_Id",
					"columns": [
						{
							"id": "b0bbb91b-54f6-2c21-e276-c5f84152a641",
							"code": "GridDetail_g6f24rxDS_UsrName",
							"caption": "#ResourceString(GridDetail_g6f24rxDS_UsrName)#",
							"dataValueType": 27
						},
						{
							"id": "60005dca-b847-3f6d-1ed7-c603f88edac9",
							"code": "GridDetail_g6f24rxDS_UsrStatus",
							"caption": "#ResourceString(GridDetail_g6f24rxDS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "fca03601-9227-c86c-0dd6-185e1efbd97f",
							"code": "GridDetail_g6f24rxDS_UsrOwner",
							"caption": "#ResourceString(GridDetail_g6f24rxDS_UsrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "8ef86fe2-d09a-bf14-8203-e054a72204da",
							"code": "GridDetail_g6f24rxDS_UsrIssueType",
							"caption": "#ResourceString(GridDetail_g6f24rxDS_UsrIssueType)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_hsdfqt1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_z6v92sl",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_z6v92sl_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_h0uo85i",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_obg88h0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_z6v92sl",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_6oefo42",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_obg88h0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_lrkjmx8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_z6v92sl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_nk84lws",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "medium"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "medium",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 14
					}
				},
				"parentName": "GridContainer_lrkjmx8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_cosmoqc",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_cosmoqc",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_cosmoqcDS_Id",
					"columns": [
						{
							"id": "440d39ac-baa1-4866-6076-1107590f3260",
							"code": "DataGrid_cosmoqcDS_UsrName",
							"caption": "#ResourceString(DataGrid_cosmoqcDS_UsrName)#",
							"dataValueType": 27
						}
					],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 11
					}
				},
				"parentName": "GridContainer_nk84lws",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_54m7383",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_54m7383",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_54m7383DS_Id",
					"columns": [
						{
							"id": "928761d9-d3f9-9515-b679-ab1db27f8af3",
							"code": "DataGrid_54m7383DS_UsrName",
							"caption": "#ResourceString(DataGrid_54m7383DS_UsrName)#",
							"dataValueType": 27
						}
					],
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 11
					}
				},
				"parentName": "GridContainer_nk84lws",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_5gohz5a",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_5gohz5a",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_5gohz5aDS_Id",
					"columns": [
						{
							"id": "8248461d-b5b3-8a74-af47-dd73b7fb9a50",
							"code": "DataGrid_5gohz5aDS_UsrName",
							"caption": "#ResourceString(DataGrid_5gohz5aDS_UsrName)#",
							"dataValueType": 27
						}
					],
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 11
					}
				},
				"parentName": "GridContainer_nk84lws",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_9c3y3df",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_9c3y3df",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_9c3y3dfDS_Id",
					"columns": [
						{
							"id": "0b2e7746-c874-c3eb-0cd9-cfde33ce5cb6",
							"code": "DataGrid_9c3y3dfDS_UsrName",
							"caption": "#ResourceString(DataGrid_9c3y3dfDS_UsrName)#",
							"dataValueType": 27,
							"width": 250
						}
					],
					"placeholder": false,
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 11
					}
				},
				"parentName": "GridContainer_nk84lws",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_d33873m",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_d33873m_caption)#",
					"iconPosition": "only-text",
					"visible": true,
					"icon": null
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ow9nd5d",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "TabContainer_d33873m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_fwwb4rv",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrIssueDS_UsrAdditionalNote_kqs5h3f",
					"labelPosition": "above",
					"control": "$UsrIssueDS_UsrAdditionalNote_kqs5h3f",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_ow9nd5d",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrIssueDS_UsrOwner_w3ppa9d": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrOwner"
						}
					},
					"UsrIssueDS_UsrDescription_l85qlz4": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrDescription"
						}
					},
					"UsrIssueDS_UsrIssueType_u4yov9y": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrIssueType"
						}
					},
					"GridDetail_u0igspt": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_u0igsptDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_tyx8hs5_GridDetail_u0igspt",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_u0igsptDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_u0igsptDS.UsrName"
									}
								},
								"GridDetail_u0igsptDS_UsrDocType": {
									"modelConfig": {
										"path": "GridDetail_u0igsptDS.UsrDocType"
									}
								},
								"GridDetail_u0igsptDS_UsrFileURL": {
									"modelConfig": {
										"path": "GridDetail_u0igsptDS.UsrFileURL"
									}
								},
								"GridDetail_u0igsptDS_Id": {
									"modelConfig": {
										"path": "GridDetail_u0igsptDS.Id"
									}
								}
							}
						}
					},
					"UsrIssueDS_UsrStatus_imcc9nu": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrStatus"
						}
					},
					"DataGrid_9c3y3df": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_9c3y3dfDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_9c3y3df_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_9c3y3dfDS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_9c3y3dfDS.UsrName"
									}
								},
								"DataGrid_9c3y3dfDS_Id": {
									"modelConfig": {
										"path": "DataGrid_9c3y3dfDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_9c3y3df_PredefinedFilter": {
						"value": {
							"items": {
								"7e7fd53b-4d7b-4e7b-9003-4657a5d1c2a5": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrIssueType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "US",
													"Id": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"value": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"displayValue": "US"
												}
											}
										}
									]
								},
								"cf1c964f-ec21-4343-9857-f03818d17b03": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrStatus"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueStatus",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Completed",
													"Id": "bcc6f6fc-f2ab-4443-a4e5-a088620ab962",
													"value": "bcc6f6fc-f2ab-4443-a4e5-a088620ab962",
													"displayValue": "Completed"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Cancelled",
													"Id": "c9561176-9bc3-453a-b488-81d1f3a96d35",
													"value": "c9561176-9bc3-453a-b488-81d1f3a96d35",
													"displayValue": "Cancelled"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrIssue"
						}
					},
					"DataGrid_54m7383": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_54m7383DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_54m7383_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_54m7383DS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_54m7383DS.UsrName"
									}
								},
								"DataGrid_54m7383DS_Id": {
									"modelConfig": {
										"path": "DataGrid_54m7383DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_5gohz5a": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_5gohz5aDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_5gohz5a_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_5gohz5aDS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_5gohz5aDS.UsrName"
									}
								},
								"DataGrid_5gohz5aDS_Id": {
									"modelConfig": {
										"path": "DataGrid_5gohz5aDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_cosmoqc": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_cosmoqcDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_cosmoqc_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_cosmoqcDS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_cosmoqcDS.UsrName"
									}
								},
								"DataGrid_cosmoqcDS_Id": {
									"modelConfig": {
										"path": "DataGrid_cosmoqcDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_g6f24rx": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_g6f24rxDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ld1ewv0_GridDetail_g6f24rx",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_g6f24rxDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_g6f24rxDS.UsrName"
									}
								},
								"GridDetail_g6f24rxDS_UsrStatus": {
									"modelConfig": {
										"path": "GridDetail_g6f24rxDS.UsrStatus"
									}
								},
								"GridDetail_g6f24rxDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_g6f24rxDS.UsrOwner"
									}
								},
								"GridDetail_g6f24rxDS_UsrIssueType": {
									"modelConfig": {
										"path": "GridDetail_g6f24rxDS.UsrIssueType"
									}
								},
								"GridDetail_g6f24rxDS_Id": {
									"modelConfig": {
										"path": "GridDetail_g6f24rxDS.Id"
									}
								}
							}
						}
					},
					"Parameter_e701hww": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrProject"
						}
					},
					"DataGrid_cosmoqc_PredefinedFilter": {
						"value": {
							"items": {
								"47cab0ed-9417-43cf-bf72-c2c1f3a142da": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrIssueType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "US",
													"Id": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"value": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"displayValue": "US"
												}
											}
										}
									]
								},
								"4e14ee2f-8f18-4fe8-b12d-71a8287ba14a": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrStatus"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueStatus",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "New",
													"Id": "34c2dbbd-9c80-4b24-bcfe-85fb6f9a042f",
													"value": "34c2dbbd-9c80-4b24-bcfe-85fb6f9a042f",
													"displayValue": "New"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrIssue"
						}
					},
					"DataGrid_54m7383_PredefinedFilter": {
						"value": {
							"items": {
								"129d0a96-2914-4d4f-abb4-65da3c32384c": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrIssueType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "US",
													"Id": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"value": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"displayValue": "US"
												}
											}
										}
									]
								},
								"af58670b-2778-4eee-b9ec-851aaf90c391": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrStatus"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueStatus",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "In Progress",
													"Id": "39cade91-0921-4a81-b7cd-9ab9eba780a4",
													"value": "39cade91-0921-4a81-b7cd-9ab9eba780a4",
													"displayValue": "In Progress"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrIssue"
						}
					},
					"DataGrid_5gohz5a_PredefinedFilter": {
						"value": {
							"items": {
								"5a4ae28a-9d7a-4ab1-a9a9-20bf3fc4a712": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrIssueType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "US",
													"Id": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"value": "c1607cd9-a588-4318-89fa-b0721dd88ba0",
													"displayValue": "US"
												}
											}
										}
									]
								},
								"a392d307-88e7-4c4c-b59b-5e7e7e52d129": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrStatus"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrIssueStatus",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "In Testing",
													"Id": "8210a656-2d03-48c2-bf02-1578bc5890a6",
													"value": "8210a656-2d03-48c2-bf02-1578bc5890a6",
													"displayValue": "In Testing"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrIssue"
						}
					},
					"DataGrid_gcx2u88": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_gcx2u88DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_gcx2u88_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_gcx2u88DS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_gcx2u88DS.UsrName"
									}
								},
								"DataGrid_gcx2u88DS_Id": {
									"modelConfig": {
										"path": "DataGrid_gcx2u88DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_gcx2u88_PredefinedFilter": {
						"value": null
					},
					"UsrIssueDS_UsrAdditionalNote_kqs5h3f": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrAdditionalNote"
						}
					},
					"UsrIssueDS_UsrExpectedDelivery_9ob5i9s": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrExpectedDeliveryTime"
						}
					},
					"UsrIssueDS_UsrActualDeliveryTime_9f8bonw": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrActualDeliveryTime"
						}
					},
					"UsrIssueDS_UsrDueDate_0kzvzy9": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrDueDate"
						}
					},
					"UsrIssueDS_UsrComplexity_8kdrmbj": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrComplexity"
						}
					},
					"UsrIssueDS_UsrMaturity_n57dbyc": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrMaturity"
						}
					},
					"UsrIssueDS_UsrItemType_5osykdk": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrItemType"
						}
					},
					"UsrIssueDS_UsrColumn18_4o5p19b": {
						"modelConfig": {
							"path": "UsrIssueDS.UsrColumn18"
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
					"primaryDataSourceName": "UsrIssueDS",
					"dependencies": {
						"DataGrid_9c3y3dfDS": [
							{
								"attributePath": "UsrParent",
								"relationPath": "UsrIssueDS.Id"
							}
						],
						"DataGrid_5gohz5aDS": [
							{
								"attributePath": "UsrParent",
								"relationPath": "UsrIssueDS.Id"
							}
						],
						"DataGrid_cosmoqcDS": [
							{
								"attributePath": "UsrParent",
								"relationPath": "UsrIssueDS.Id"
							}
						],
						"GridDetail_g6f24rxDS": [
							{
								"attributePath": "UsrParent",
								"relationPath": "UsrIssueDS.Id"
							}
						],
						"DataGrid_54m7383DS": [
							{
								"attributePath": "UsrParent",
								"relationPath": "UsrIssueDS.Id"
							}
						],
						"GridDetail_u0igsptDS": [
							{
								"attributePath": "UsrIssue",
								"relationPath": "UsrIssueDS.Id"
							}
						],
						"DataGrid_gcx2u88DS": [
							{
								"attributePath": "UsrIssue.UsrParent",
								"relationPath": "UsrIssueDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrIssueDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrIssue"
						}
					},
					"GridDetail_u0igsptDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrDocument",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrDocType": {
									"path": "UsrDocType"
								},
								"UsrFileURL": {
									"path": "UsrFileURL"
								}
							}
						}
					},
					"DataGrid_9c3y3dfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								}
							}
						}
					},
					"DataGrid_54m7383DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								}
							}
						}
					},
					"DataGrid_5gohz5aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								}
							}
						}
					},
					"DataGrid_cosmoqcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								}
							}
						}
					},
					"GridDetail_g6f24rxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrIssueType": {
									"path": "UsrIssueType"
								}
							}
						}
					},
					"DataGrid_gcx2u88DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrDocument",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});