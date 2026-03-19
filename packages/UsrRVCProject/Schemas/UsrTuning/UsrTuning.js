define("UsrTuning", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "PageTitle"
			},
			{
				"operation": "move",
				"name": "LeftFilterContainerInner",
				"parentName": "GridContainer_xw9dmoq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainerInner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "FolderTreeActions"
			},
			{
				"operation": "remove",
				"name": "LookupQuickFilterByTag"
			},
			{
				"operation": "remove",
				"name": "SearchFilter"
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "Label_3k8btu6",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_3k8btu6_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_yox6sut",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_yox6sut_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_xw9dmoq",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_e90rtow",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupProject_vgn5xpg",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PageParameters_UsrLookupProject_vgn5xpg",
					"mode": "List",
					"visible": true,
					"readonly": true,
					"placeholder": ""
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_iwakg1b",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_iwakg1b_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_e90rtow",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabPanel_jm1g6of",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true,
					"allowToggleClose": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_o8lt15a",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_o8lt15a_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_jm1g6of",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_qqwa2vx",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
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
				},
				"parentName": "TabContainer_o8lt15a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_p9fxeyx",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": true
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false,
							"itemsCreation": false
						},
						"columns": {
							"sorting": false,
							"resizing": false,
							"dragAndDrop": false
						}
					},
					"items": "$DataGrid_p9fxeyx",
					"primaryColumnName": "DataGrid_p9fxeyxDS_Id",
					"columns": [
						{
							"id": "80c7d140-c28c-ab0d-5b16-73d2cea6485b",
							"code": "DataGrid_p9fxeyxDS_UsrComplexity",
							"caption": "#ResourceString(DataGrid_p9fxeyxDS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "e12442be-0df1-5a1e-e632-52dcb90cecdc",
							"code": "DataGrid_p9fxeyxDS_UsrExpert",
							"caption": "#ResourceString(DataGrid_p9fxeyxDS_UsrExpert)#",
							"dataValueType": 31
						},
						{
							"id": "56b8c8f3-8873-4521-6940-e8f308a4c525",
							"code": "DataGrid_p9fxeyxDS_UsrBusiness",
							"caption": "#ResourceString(DataGrid_p9fxeyxDS_UsrBusiness)#",
							"dataValueType": 31
						},
						{
							"id": "721c8c7e-e7d6-642b-b9a0-2cd0b681c2b2",
							"code": "DataGrid_p9fxeyxDS_UsrJunior",
							"caption": "#ResourceString(DataGrid_p9fxeyxDS_UsrJunior)#",
							"dataValueType": 31
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "TabContainer_o8lt15a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_yy5nv47",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_yy5nv47_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "TabPanel_jm1g6of",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_3fu1b6u",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_yy5nv47",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_56a859w",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": false
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_56a859w",
					"primaryColumnName": "DataGrid_56a859wDS_Id",
					"columns": [
						{
							"id": "7a8e1618-eb71-6eaf-f253-44c7b41cfd8d",
							"code": "DataGrid_56a859wDS_UsrComplexity",
							"caption": "#ResourceString(DataGrid_56a859wDS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "65bcf7bf-3345-aacf-1c21-364f5d5c1ca7",
							"code": "DataGrid_56a859wDS_UsrExpert",
							"caption": "#ResourceString(DataGrid_56a859wDS_UsrExpert)#",
							"dataValueType": 31
						},
						{
							"id": "9c9e1850-1c7e-6a19-b1f7-d91f4a87591c",
							"code": "DataGrid_56a859wDS_UsrBusiness",
							"caption": "#ResourceString(DataGrid_56a859wDS_UsrBusiness)#",
							"dataValueType": 31
						},
						{
							"id": "f107fc7a-bdca-5c06-b8b4-0d64bf212276",
							"code": "DataGrid_56a859wDS_UsrJunior",
							"caption": "#ResourceString(DataGrid_56a859wDS_UsrJunior)#",
							"dataValueType": 31
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "TabContainer_yy5nv47",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_z6j4tqc",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_z6j4tqc_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_jm1g6of",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_dblahom",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_z6j4tqc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_dl34k2h",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": false
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_dl34k2h",
					"primaryColumnName": "DataGrid_dl34k2hDS_Id",
					"columns": [
						{
							"id": "abcff5ca-5fd6-bc07-7b93-100c9be3149d",
							"code": "DataGrid_dl34k2hDS_UsrComplexity",
							"caption": "#ResourceString(DataGrid_dl34k2hDS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "281bc6c5-a49d-0258-cb92-8ae8c7a672d4",
							"code": "DataGrid_dl34k2hDS_UsrExpert",
							"caption": "#ResourceString(DataGrid_dl34k2hDS_UsrExpert)#",
							"dataValueType": 31
						},
						{
							"id": "f4b22ca3-b3d0-0f65-9f5d-28dc44ac661d",
							"code": "DataGrid_dl34k2hDS_UsrBusiness",
							"caption": "#ResourceString(DataGrid_dl34k2hDS_UsrBusiness)#",
							"dataValueType": 31
						},
						{
							"id": "3a853f6b-93ce-26bf-cd1e-0ac007ec0553",
							"code": "DataGrid_dl34k2hDS_UsrJunior",
							"caption": "#ResourceString(DataGrid_dl34k2hDS_UsrJunior)#",
							"dataValueType": 31
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "TabContainer_z6j4tqc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_iys3mxq",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_iys3mxq_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_jm1g6of",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_2hiila3",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_iys3mxq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_5ud2mo5",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"columns": {
							"resizing": false,
							"dragAndDrop": false
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_5ud2mo5",
					"primaryColumnName": "DataGrid_5ud2mo5DS_Id",
					"columns": [
						{
							"id": "2e2ebaeb-fa72-a5c4-b2c4-b48336085dae",
							"code": "DataGrid_5ud2mo5DS_UsrComplexity",
							"caption": "#ResourceString(DataGrid_5ud2mo5DS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "6195b5f7-cf53-6968-e84c-762b7920ae2c",
							"code": "DataGrid_5ud2mo5DS_UsrExpert",
							"caption": "#ResourceString(DataGrid_5ud2mo5DS_UsrExpert)#",
							"dataValueType": 31
						},
						{
							"id": "7931ba88-3f16-d547-468d-911a9d30dfbb",
							"code": "DataGrid_5ud2mo5DS_UsrBusiness",
							"caption": "#ResourceString(DataGrid_5ud2mo5DS_UsrBusiness)#",
							"dataValueType": 31
						},
						{
							"id": "79207dd0-4d4e-f935-3bc3-eaa684130097",
							"code": "DataGrid_5ud2mo5DS_UsrJunior",
							"caption": "#ResourceString(DataGrid_5ud2mo5DS_UsrJunior)#",
							"dataValueType": 31
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "TabContainer_iys3mxq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_0lspq1h",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_0lspq1h_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_jm1g6of",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_8b5adeo",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_0lspq1h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_7jo38x2",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false,
							"itemsCreation": false
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": false
						}
					},
					"items": "$DataGrid_7jo38x2",
					"primaryColumnName": "DataGrid_7jo38x2DS_Id",
					"columns": [
						{
							"id": "b1156520-eb64-5907-9ad6-011bf8ca2859",
							"code": "DataGrid_7jo38x2DS_UsrComplexity",
							"caption": "#ResourceString(DataGrid_7jo38x2DS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "c93d36f3-94cc-51e6-79c8-dd7a53c0977b",
							"code": "DataGrid_7jo38x2DS_UsrExpert",
							"caption": "#ResourceString(DataGrid_7jo38x2DS_UsrExpert)#",
							"dataValueType": 31
						},
						{
							"id": "450c9c55-32e0-98d4-8399-e943666a9cb4",
							"code": "DataGrid_7jo38x2DS_UsrBusiness",
							"caption": "#ResourceString(DataGrid_7jo38x2DS_UsrBusiness)#",
							"dataValueType": 31
						},
						{
							"id": "add98002-c8cc-3148-76a6-51b2e716edf8",
							"code": "DataGrid_7jo38x2DS_UsrJunior",
							"caption": "#ResourceString(DataGrid_7jo38x2DS_UsrJunior)#",
							"dataValueType": 31
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "TabContainer_0lspq1h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_6a22rbt",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_6a22rbt_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "TabPanel_jm1g6of",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_elgrtbi",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_6a22rbt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_2ai47pu",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_2ai47pu",
					"primaryColumnName": "DataGrid_2ai47puDS_Id",
					"columns": [
						{
							"id": "87aeac43-1c64-5c9e-845f-77f8b74aff61",
							"code": "DataGrid_2ai47puDS_UsrMaturity",
							"caption": "#ResourceString(DataGrid_2ai47puDS_UsrMaturity)#",
							"dataValueType": 10
						},
						{
							"id": "9376504f-dedc-9b8a-1025-67f5fc0fd92e",
							"code": "DataGrid_2ai47puDS_UsrMultiplierExpert",
							"caption": "#ResourceString(DataGrid_2ai47puDS_UsrMultiplierExpert)#",
							"dataValueType": 31
						},
						{
							"id": "70b5228c-6c8b-8855-64c2-029bcbdb87e2",
							"code": "DataGrid_2ai47puDS_UsrMultiplierBusiness",
							"caption": "#ResourceString(DataGrid_2ai47puDS_UsrMultiplierBusiness)#",
							"dataValueType": 31
						},
						{
							"id": "f28d9ba9-67ad-83ea-3e35-5912056f911e",
							"code": "DataGrid_2ai47puDS_UsrMultiplierJunior",
							"caption": "#ResourceString(DataGrid_2ai47puDS_UsrMultiplierJunior)#",
							"dataValueType": 31
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_6a22rbt",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_p9fxeyx": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_p9fxeyxDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_p9fxeyx_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComplexity"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_p9fxeyxDS_UsrComplexity": {
									"modelConfig": {
										"path": "DataGrid_p9fxeyxDS.UsrComplexity"
									}
								},
								"DataGrid_p9fxeyxDS_UsrExpert": {
									"modelConfig": {
										"path": "DataGrid_p9fxeyxDS.UsrExpert"
									}
								},
								"DataGrid_p9fxeyxDS_UsrBusiness": {
									"modelConfig": {
										"path": "DataGrid_p9fxeyxDS.UsrBusiness"
									}
								},
								"DataGrid_p9fxeyxDS_UsrJunior": {
									"modelConfig": {
										"path": "DataGrid_p9fxeyxDS.UsrJunior"
									}
								},
								"DataGrid_p9fxeyxDS_Id": {
									"modelConfig": {
										"path": "DataGrid_p9fxeyxDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_p9fxeyx_PredefinedFilter": {
						"value": {
							"items": {
								"8a7e218d-d14e-42a0-aaf9-f041c0838a5f": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrItemType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrItemType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Support Type",
													"Id": "7f223053-0b4a-40d1-ac49-20b476466745",
													"value": "7f223053-0b4a-40d1-ac49-20b476466745",
													"displayValue": "Support Type"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrLoadTuningEffort"
						}
					},
					"DataGrid_56a859w": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_56a859wDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_56a859w_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComplexity"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_56a859wDS_UsrComplexity": {
									"modelConfig": {
										"path": "DataGrid_56a859wDS.UsrComplexity"
									}
								},
								"DataGrid_56a859wDS_UsrExpert": {
									"modelConfig": {
										"path": "DataGrid_56a859wDS.UsrExpert"
									}
								},
								"DataGrid_56a859wDS_UsrBusiness": {
									"modelConfig": {
										"path": "DataGrid_56a859wDS.UsrBusiness"
									}
								},
								"DataGrid_56a859wDS_UsrJunior": {
									"modelConfig": {
										"path": "DataGrid_56a859wDS.UsrJunior"
									}
								},
								"DataGrid_56a859wDS_Id": {
									"modelConfig": {
										"path": "DataGrid_56a859wDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_56a859w_PredefinedFilter": {
						"value": {
							"items": {
								"c11c1fce-814d-427f-a6b7-07aa2ee50c57": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrItemType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrItemType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Case Type",
													"Id": "ae8ea17f-741c-4fc4-92d6-b52ca43d2c7a",
													"value": "ae8ea17f-741c-4fc4-92d6-b52ca43d2c7a",
													"displayValue": "Case Type"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrLoadTuningEffort"
						}
					},
					"PageParameters_UsrLookupProject_vgn5xpg": {
						"modelConfig": {
							"path": "PageParameters.UsrLookupProject"
						}
					},
					"PageParameters_UsrLookupProject_vgn5xpg_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"DataGrid_dl34k2h": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_dl34k2hDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_dl34k2h_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComplexity"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_dl34k2hDS_UsrComplexity": {
									"modelConfig": {
										"path": "DataGrid_dl34k2hDS.UsrComplexity"
									}
								},
								"DataGrid_dl34k2hDS_UsrExpert": {
									"modelConfig": {
										"path": "DataGrid_dl34k2hDS.UsrExpert"
									}
								},
								"DataGrid_dl34k2hDS_UsrBusiness": {
									"modelConfig": {
										"path": "DataGrid_dl34k2hDS.UsrBusiness"
									}
								},
								"DataGrid_dl34k2hDS_UsrJunior": {
									"modelConfig": {
										"path": "DataGrid_dl34k2hDS.UsrJunior"
									}
								},
								"DataGrid_dl34k2hDS_Id": {
									"modelConfig": {
										"path": "DataGrid_dl34k2hDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_dl34k2h_PredefinedFilter": {
						"value": {
							"items": {
								"4948f876-b3d9-48dd-a892-71cfebce1596": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrItemType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrItemType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Interfaces",
													"Id": "5e83529e-631e-41aa-8a74-b177a0dc35b4",
													"value": "5e83529e-631e-41aa-8a74-b177a0dc35b4",
													"displayValue": "Interfaces"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrLoadTuningEffort"
						}
					},
					"DataGrid_5ud2mo5": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_5ud2mo5DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_5ud2mo5_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComplexity"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_5ud2mo5DS_UsrComplexity": {
									"modelConfig": {
										"path": "DataGrid_5ud2mo5DS.UsrComplexity"
									}
								},
								"DataGrid_5ud2mo5DS_UsrExpert": {
									"modelConfig": {
										"path": "DataGrid_5ud2mo5DS.UsrExpert"
									}
								},
								"DataGrid_5ud2mo5DS_UsrBusiness": {
									"modelConfig": {
										"path": "DataGrid_5ud2mo5DS.UsrBusiness"
									}
								},
								"DataGrid_5ud2mo5DS_UsrJunior": {
									"modelConfig": {
										"path": "DataGrid_5ud2mo5DS.UsrJunior"
									}
								},
								"DataGrid_5ud2mo5DS_Id": {
									"modelConfig": {
										"path": "DataGrid_5ud2mo5DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_5ud2mo5_PredefinedFilter": {
						"value": {
							"items": {
								"a1015f91-c648-4207-a1ad-ba61e6bbfd62": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrItemType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrItemType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Report and Notification",
													"Id": "ecb14afd-aaa9-4a91-9117-0b62991acbc8",
													"value": "ecb14afd-aaa9-4a91-9117-0b62991acbc8",
													"displayValue": "Report and Notification"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrLoadTuningEffort"
						}
					},
					"DataGrid_7jo38x2": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_7jo38x2DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_7jo38x2_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComplexity"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_7jo38x2DS_UsrComplexity": {
									"modelConfig": {
										"path": "DataGrid_7jo38x2DS.UsrComplexity"
									}
								},
								"DataGrid_7jo38x2DS_UsrExpert": {
									"modelConfig": {
										"path": "DataGrid_7jo38x2DS.UsrExpert"
									}
								},
								"DataGrid_7jo38x2DS_UsrBusiness": {
									"modelConfig": {
										"path": "DataGrid_7jo38x2DS.UsrBusiness"
									}
								},
								"DataGrid_7jo38x2DS_UsrJunior": {
									"modelConfig": {
										"path": "DataGrid_7jo38x2DS.UsrJunior"
									}
								},
								"DataGrid_7jo38x2DS_Id": {
									"modelConfig": {
										"path": "DataGrid_7jo38x2DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_7jo38x2_PredefinedFilter": {
						"value": {
							"items": {
								"678b8a3c-17e9-499b-8276-2230d8b5bca7": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrItemType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrItemType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "User Profiles",
													"Id": "880bfb92-a881-4037-92a8-81aac0c852ef",
													"value": "880bfb92-a881-4037-92a8-81aac0c852ef",
													"displayValue": "User Profiles"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrLoadTuningEffort"
						}
					},
					"DataGrid_2ai47pu": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_2ai47puDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrMaturity"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_2ai47puDS_UsrMaturity": {
									"modelConfig": {
										"path": "DataGrid_2ai47puDS.UsrMaturity"
									}
								},
								"DataGrid_2ai47puDS_UsrMultiplierExpert": {
									"modelConfig": {
										"path": "DataGrid_2ai47puDS.UsrMultiplierExpert"
									}
								},
								"DataGrid_2ai47puDS_UsrMultiplierBusiness": {
									"modelConfig": {
										"path": "DataGrid_2ai47puDS.UsrMultiplierBusiness"
									}
								},
								"DataGrid_2ai47puDS_UsrMultiplierJunior": {
									"modelConfig": {
										"path": "DataGrid_2ai47puDS.UsrMultiplierJunior"
									}
								},
								"DataGrid_2ai47puDS_Id": {
									"modelConfig": {
										"path": "DataGrid_2ai47puDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrComplexity": {
						"modelConfig": {
							"path": "PDS.UsrComplexity"
						}
					},
					"PDS_UsrBusiness": {
						"modelConfig": {
							"path": "PDS.UsrBusiness"
						}
					},
					"PDS_UsrExpert": {
						"modelConfig": {
							"path": "PDS.UsrExpert"
						}
					},
					"PDS_UsrJunior": {
						"modelConfig": {
							"path": "PDS.UsrJunior"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "UsrComplexity"
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"HeaderCaption"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ItemsSorting"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"FolderTree_visible"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"loadingConfig": {},
					"dependencies": {
						"DataGrid_56a859wDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PageParameters.UsrLookupProject"
							}
						],
						"DataGrid_p9fxeyxDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PageParameters.UsrLookupProject"
							}
						],
						"DataGrid_5ud2mo5DS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PageParameters.UsrLookupProject"
							}
						],
						"DataGrid_dl34k2hDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PageParameters.UsrLookupProject"
							}
						],
						"DataGrid_7jo38x2DS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PageParameters.UsrLookupProject"
							}
						],
						"DataGrid_2ai47puDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PageParameters.UsrLookupProject"
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
					"DataGrid_p9fxeyxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLoadTuningEffort",
							"attributes": {
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrExpert": {
									"path": "UsrExpert"
								},
								"UsrBusiness": {
									"path": "UsrBusiness"
								},
								"UsrJunior": {
									"path": "UsrJunior"
								}
							}
						}
					},
					"DataGrid_56a859wDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLoadTuningEffort",
							"attributes": {
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrExpert": {
									"path": "UsrExpert"
								},
								"UsrBusiness": {
									"path": "UsrBusiness"
								},
								"UsrJunior": {
									"path": "UsrJunior"
								}
							}
						}
					},
					"DataGrid_dl34k2hDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLoadTuningEffort",
							"attributes": {
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrExpert": {
									"path": "UsrExpert"
								},
								"UsrBusiness": {
									"path": "UsrBusiness"
								},
								"UsrJunior": {
									"path": "UsrJunior"
								}
							}
						}
					},
					"DataGrid_5ud2mo5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLoadTuningEffort",
							"attributes": {
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrExpert": {
									"path": "UsrExpert"
								},
								"UsrBusiness": {
									"path": "UsrBusiness"
								},
								"UsrJunior": {
									"path": "UsrJunior"
								}
							}
						}
					},
					"DataGrid_7jo38x2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLoadTuningEffort",
							"attributes": {
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrExpert": {
									"path": "UsrExpert"
								},
								"UsrBusiness": {
									"path": "UsrBusiness"
								},
								"UsrJunior": {
									"path": "UsrJunior"
								}
							}
						}
					},
					"DataGrid_2ai47puDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrMaturityRoleMultiplier",
							"attributes": {
								"UsrMaturity": {
									"path": "UsrMaturity"
								},
								"UsrMultiplierExpert": {
									"path": "UsrMultiplierExpert"
								},
								"UsrMultiplierBusiness": {
									"path": "UsrMultiplierBusiness"
								},
								"UsrMultiplierJunior": {
									"path": "UsrMultiplierJunior"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrLoadTuningEffort",
					"attributes": {
						"UsrComplexity": {
							"path": "UsrComplexity"
						},
						"UsrBusiness": {
							"path": "UsrBusiness"
						},
						"UsrExpert": {
							"path": "UsrExpert"
						},
						"UsrJunior": {
							"path": "UsrJunior"
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