define("UsrSizing_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrSizingTool"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "MainFilterContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
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
				"name": "ContentContainer"
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "remove",
				"name": "SectionContentWrapper"
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "ComboBox_s84d43s",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PageParameters_UsrLookupParameter1_y6qbkbn",
					"labelPosition": null,
					"control": "$PageParameters_UsrLookupParameter1_y6qbkbn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": null,
					"readonly": false,
					"placeholder": null,
					"tooltip": null,
					"isSimpleLookup": null,
					"valueDetails": null,
					"secondaryDisplayValue": null,
					"mode": "List"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ListAction_0ai5wrj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_s84d43s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_9p7moey",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_9p7moey_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "UsrTuning",
							"parameters": {
								"UsrLookupProject": "$PageParameters_UsrLookupParameter1_y6qbkbn"
							}
						}
					},
					"clickMode": "default"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_eujfm9x",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_eujfm9x_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_yr2wvor",
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
				"parentName": "ExpansionPanel_eujfm9x",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bznu19g",
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
				"parentName": "GridContainer_yr2wvor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0b70glu",
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
				"parentName": "ExpansionPanel_eujfm9x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_wz8bzkq",
				"values": {
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_wz8bzkq_title)#",
						"color": "green",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_wz8bzkq_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_wz8bzkq_SeriesData_0",
										"schemaName": "UsrSizingTool",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrRole"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "UsrSizingTool"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrEstimatedTime"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "UsrProject",
												"relationPath": "PageParameters.UsrLookupProject"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrRole"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0b70glu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_l1t6gqf",
				"values": {
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_l1t6gqf_title)#",
						"color": "green",
						"theme": "full-fill",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_l1t6gqf_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_l1t6gqf_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_l1t6gqf_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_l1t6gqf_SeriesData_0",
										"schemaName": "UsrSizingTool",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrItemType"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "UsrSizingTool"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrEstimatedTime"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "UsrProject",
												"relationPath": "PageParameters.UsrLookupProject"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrItemType"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0b70glu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lubimto",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lubimto_title)#",
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_4rz3lu8",
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
				"parentName": "ExpansionPanel_lubimto",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8pmp14a",
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
				"parentName": "GridContainer_4rz3lu8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_g0pqyow",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_g0pqyow_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrSizingTool"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_8pmp14a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_u26vo0r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_u26vo0r_caption)#",
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
							"dataSourceName": "GridDetail_79c6c2fDS"
						}
					}
				},
				"parentName": "FlexContainer_8pmp14a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_gx43rl6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_gx43rl6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": false
				},
				"parentName": "FlexContainer_8pmp14a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_mzgyxir",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_mzgyxir_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_79c6c2f"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_gx43rl6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_iokcgou",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_iokcgou_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrSizingTool"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_gx43rl6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_lp4v9zh",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_lp4v9zh_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_lp4v9zh_GridDetail_79c6c2f",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_79c6c2f"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_lp4v9zh_SearchValue",
							"GridDetailSearchFilter_lp4v9zh_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_8pmp14a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_to5pqas",
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
				"parentName": "ExpansionPanel_lubimto",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_79c6c2f",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 18
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_79c6c2f",
					"primaryColumnName": "GridDetail_79c6c2fDS_Id",
					"columns": [
						{
							"id": "23189a8b-f1dc-6f14-8dc3-37c7d3ad0185",
							"code": "GridDetail_79c6c2fDS_UsrItemType",
							"caption": "#ResourceString(GridDetail_79c6c2fDS_UsrItemType)#",
							"dataValueType": 10
						},
						{
							"id": "838b0e88-12f6-0acd-35a8-b4e8faaf0d85",
							"code": "GridDetail_79c6c2fDS_UsrEpicName",
							"caption": "#ResourceString(GridDetail_79c6c2fDS_UsrEpicName)#",
							"dataValueType": 28
						},
						{
							"id": "dbd98d79-569e-4df3-001b-2f4efc1ef2ce",
							"code": "GridDetail_79c6c2fDS_UsrComplexity",
							"caption": "#ResourceString(GridDetail_79c6c2fDS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "ddbaa6c5-e228-db60-9032-3574d02dcf3d",
							"code": "GridDetail_79c6c2fDS_UsrMaturity",
							"caption": "#ResourceString(GridDetail_79c6c2fDS_UsrMaturity)#",
							"dataValueType": 10
						},
						{
							"id": "d91314aa-abfb-8718-87af-ef85278dd7ab",
							"code": "GridDetail_79c6c2fDS_UsrRole",
							"caption": "#ResourceString(GridDetail_79c6c2fDS_UsrRole)#",
							"dataValueType": 10
						},
						{
							"id": "cb1ed5fd-077e-914c-bf50-d583bcee120b",
							"code": "GridDetail_79c6c2fDS_UsrEstimatedTime",
							"caption": "#ResourceString(GridDetail_79c6c2fDS_UsrEstimatedTime)#",
							"dataValueType": 31
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_to5pqas",
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
					"PageParameters_UsrLookupParameter1_y6qbkbn": {
						"modelConfig": {
							"path": "PageParameters.UsrLookupProject"
						}
					},
					"PageParameters_UsrLookupParameter1_y6qbkbn_List": {
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
					"GridDetail_79c6c2f": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_79c6c2fDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_lp4v9zh_GridDetail_79c6c2f",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_79c6c2fDS_UsrItemType": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.UsrItemType"
									}
								},
								"GridDetail_79c6c2fDS_UsrEpicName": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.UsrEpicName"
									}
								},
								"GridDetail_79c6c2fDS_UsrComplexity": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.UsrComplexity"
									}
								},
								"GridDetail_79c6c2fDS_UsrMaturity": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.UsrMaturity"
									}
								},
								"GridDetail_79c6c2fDS_UsrRole": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.UsrRole"
									}
								},
								"GridDetail_79c6c2fDS_UsrEstimatedTime": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.UsrEstimatedTime"
									}
								},
								"GridDetail_79c6c2fDS_Id": {
									"modelConfig": {
										"path": "GridDetail_79c6c2fDS.Id"
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
					"PDS_UsrItemType": {
						"modelConfig": {
							"path": "PDS.UsrItemType"
						}
					},
					"PDS_UsrEpicName": {
						"modelConfig": {
							"path": "PDS.UsrEpicName"
						}
					},
					"PDS_UsrEpic": {
						"modelConfig": {
							"path": "PDS.UsrEpic"
						}
					},
					"PDS_UsrRole": {
						"modelConfig": {
							"path": "PDS.UsrRole"
						}
					},
					"PDS_UsrEstimatedTime": {
						"modelConfig": {
							"path": "PDS.UsrEstimatedTime"
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
							"direction": "asc",
							"columnName": "UsrItemType"
						}
					]
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
					"dependencies": {
						"GridDetail_79c6c2fDS": [
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
					"GridDetail_79c6c2fDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrSizingTool",
							"attributes": {
								"UsrItemType": {
									"path": "UsrItemType"
								},
								"UsrEpicName": {
									"path": "UsrEpicName"
								},
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrMaturity": {
									"path": "UsrMaturity"
								},
								"UsrRole": {
									"path": "UsrRole"
								},
								"UsrEstimatedTime": {
									"path": "UsrEstimatedTime"
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
					"entitySchemaName": "UsrSizingTool",
					"attributes": {
						"UsrItemType": {
							"path": "UsrItemType"
						},
						"UsrEpicName": {
							"path": "UsrEpicName"
						},
						"UsrEpic": {
							"path": "UsrEpic"
						},
						"UsrRole": {
							"path": "UsrRole"
						},
						"UsrEstimatedTime": {
							"path": "UsrEstimatedTime"
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