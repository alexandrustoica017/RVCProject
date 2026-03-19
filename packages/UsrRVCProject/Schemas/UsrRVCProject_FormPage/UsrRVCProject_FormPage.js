define("UsrRVCProject_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
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
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRVCProject"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "494604df-af78-421c-b38b-082652a941c4",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_nwk7gvv",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "UsrRVCProject"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_dmbvs1c",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "small",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountCompactProfile_zy0d8u0",
				"values": {
					"type": "crt.AccountCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$Parameter_twbhthb"
				},
				"parentName": "FlexContainer_dmbvs1c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommunicationOptions_j3vvgza",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": true,
					"columnsCount": 2,
					"showNoDataPlaceholder": true,
					"labelPosition": "auto",
					"items": "$CommunicationOptions_j3vvgza",
					"masterRecordColumnName": "Account",
					"visible": true,
					"masterRecordColumnValue": "$Parameter_twbhthb",
					"primaryColumnName": "CommunicationOptions_j3vvgzaDS_Id"
				},
				"parentName": "FlexContainer_dmbvs1c",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0o6un7m",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "small",
					"padding": {
						"top": "small",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_1uvgvdd",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$PDS_UsrCustomerRef_l37q5ty"
				},
				"parentName": "FlexContainer_0o6un7m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommunicationOptions_5mo4q2s",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": true,
					"columnsCount": 2,
					"showNoDataPlaceholder": true,
					"labelPosition": "auto",
					"items": "$CommunicationOptions_5mo4q2s",
					"masterRecordColumnName": "Contact",
					"visible": true,
					"masterRecordColumnValue": "$PDS_UsrCustomerRef_l37q5ty"
				},
				"parentName": "FlexContainer_0o6un7m",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_l6adt72",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrPhaseCompleted_jj7zrmg",
					"labelPosition": "auto",
					"control": "$PDS_UsrPhaseCompleted_jj7zrmg",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Button_38qfnmu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_38qfnmu_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrInitRuleMatrix",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RVCProject"
						}
					},
					"clickMode": "default"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_3l7w9jv",
				"values": {
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.PDS_UsrSummary_j3fwxp5",
					"labelPosition": "auto",
					"control": "$PDS_UsrSummary_j3fwxp5"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ww7z0kp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCustomer_8yrexg8",
					"labelPosition": "auto",
					"control": "$PDS_UsrCustomer_8yrexg8",
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
				"name": "addRecord_hplggl6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hplggl6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ww7z0kp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_pobndeq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCustomerRef_l37q5ty",
					"labelPosition": "auto",
					"control": "$PDS_UsrCustomerRef_l37q5ty",
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
				"name": "addRecord_t0ov4a1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t0ov4a1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_pobndeq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_v5uhoqt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLeadBA_ow0bpc2",
					"labelPosition": "auto",
					"control": "$PDS_UsrLeadBA_ow0bpc2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_hx5753f",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrSalesRef_79vms97",
					"labelPosition": "auto",
					"control": "$PDS_UsrSalesRef_79vms97",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
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
				"name": "ContactCompactProfile_i5b12tz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$PDS_UsrLeadBA_ow0bpc2"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_ybnzj2a",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$PDS_UsrSalesRef_79vms97"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_re2o37i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrTestManager_qg2yxhr",
					"labelPosition": "auto",
					"control": "$PDS_UsrTestManager_qg2yxhr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_a6vqoys",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLeadTech_8crksa8",
					"labelPosition": "auto",
					"control": "$PDS_UsrLeadTech_8crksa8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_g402qy4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$PDS_UsrTestManager_qg2yxhr"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_x48bk7v",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$PDS_UsrLeadTech_8crksa8"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ComboBox_5qyaj91",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrPhase_f7n3dwc",
					"labelPosition": "auto",
					"control": "$PDS_UsrPhase_f7n3dwc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_7watpc6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7watpc6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5qyaj91",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_bca8j54",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_bca8j54_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_e4zv5ws",
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
				"parentName": "TabContainer_bca8j54",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_u0zb5l4",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_u0zb5l4_title)#",
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
				"parentName": "TabContainer_bca8j54",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_tlx9okm",
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
				"parentName": "ExpansionPanel_u0zb5l4",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_x7e58tn",
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
				"parentName": "GridContainer_tlx9okm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_jg30qrv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_jg30qrv_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddEpic",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "Project"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_x7e58tn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_kb5onpz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_kb5onpz_caption)#",
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
							"dataSourceName": "GridDetail_9ilj70tDS"
						}
					}
				},
				"parentName": "FlexContainer_x7e58tn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_rc9ei6y",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_rc9ei6y_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_x7e58tn",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_hvkkh8s",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_hvkkh8s_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_9ilj70t"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_rc9ei6y",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_hjrhu5w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_hjrhu5w_caption)#",
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
				"parentName": "GridDetailSettingsBtn_rc9ei6y",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_bsj33yd",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_bsj33yd_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_bsj33yd_GridDetail_9ilj70t",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_9ilj70t"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_bsj33yd_SearchValue",
							"GridDetailSearchFilter_bsj33yd_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_x7e58tn",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_gww3um0",
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
				"parentName": "ExpansionPanel_u0zb5l4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_9ilj70t",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 15
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
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_9ilj70t",
					"primaryColumnName": "GridDetail_9ilj70tDS_Id",
					"columns": [
						{
							"id": "f86ddc93-956e-ed7c-5a20-45a62215b60f",
							"code": "GridDetail_9ilj70tDS_UsrName",
							"caption": "#ResourceString(GridDetail_9ilj70tDS_UsrName)#",
							"dataValueType": 27,
							"width": 162.9857940673828
						},
						{
							"id": "48b1e83e-1c2c-6414-927c-1640e2eb8a92",
							"code": "GridDetail_9ilj70tDS_UsrIssueTypeName",
							"caption": "#ResourceString(GridDetail_9ilj70tDS_UsrIssueTypeName)#",
							"dataValueType": 28,
							"width": 125.98863220214844
						},
						{
							"id": "673d0bab-3250-78a1-f006-68bf335b4c1b",
							"code": "GridDetail_9ilj70tDS_UsrItemType",
							"caption": "#ResourceString(GridDetail_9ilj70tDS_UsrItemType)#",
							"dataValueType": 10
						},
						{
							"id": "0a48d1d8-90c0-be3e-0782-fd155737d560",
							"code": "GridDetail_9ilj70tDS_UsrComplexity",
							"caption": "#ResourceString(GridDetail_9ilj70tDS_UsrComplexity)#",
							"dataValueType": 10
						},
						{
							"id": "84fcf4a6-157a-abd6-0dc7-667ac1b3c681",
							"code": "GridDetail_9ilj70tDS_UsrMaturity",
							"caption": "#ResourceString(GridDetail_9ilj70tDS_UsrMaturity)#",
							"dataValueType": 10
						},
						{
							"id": "71c4742a-9de0-ab1a-df99-7cbee3ee074e",
							"code": "GridDetail_9ilj70tDS_UsrStatus",
							"caption": "#ResourceString(GridDetail_9ilj70tDS_UsrStatus)#",
							"dataValueType": 10,
							"width": 119
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_gww3um0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_0muq1wt",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_0muq1wt_title)#",
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
				"parentName": "TabContainer_bca8j54",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_s9zof06",
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
				"parentName": "ExpansionPanel_0muq1wt",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0q39zbo",
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
				"parentName": "GridContainer_s9zof06",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_0tp7u1b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_0tp7u1b_caption)#",
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
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_0q39zbo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_1i7kv07",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_1i7kv07_caption)#",
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
							"dataSourceName": "GridDetail_9ilj70tDS"
						}
					}
				},
				"parentName": "FlexContainer_0q39zbo",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_pdb2fo0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_pdb2fo0_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_0q39zbo",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_7sjvw31",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_7sjvw31_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_9ilj70t"
						}
					}
				},
				"parentName": "Button_pdb2fo0",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_vei4i25",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_vei4i25_caption)#",
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
				"parentName": "Button_pdb2fo0",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_g8aqaly",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_g8aqaly_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_g8aqaly_GridDetail_9ilj70t",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_9ilj70t"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_g8aqaly_SearchValue",
							"SearchFilter_g8aqaly_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_0q39zbo",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_wqq24z0",
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
				"parentName": "ExpansionPanel_0muq1wt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_8y39725",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 15
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
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_8y39725",
					"primaryColumnName": "DataGrid_8y39725DS_Id",
					"columns": [
						{
							"id": "6d215361-8023-54f7-7ae6-24db7e8156d6",
							"code": "DataGrid_8y39725DS_UsrName",
							"caption": "#ResourceString(DataGrid_8y39725DS_UsrName)#",
							"dataValueType": 27,
							"width": 162.9857940673828
						},
						{
							"id": "a96140fb-bf4f-5033-213f-e6feb4d04b6c",
							"code": "DataGrid_8y39725DS_UsrIssueTypeName",
							"caption": "#ResourceString(DataGrid_8y39725DS_UsrIssueTypeName)#",
							"dataValueType": 28,
							"width": 125.98863220214844
						},
						{
							"id": "cf462ed4-fd13-3b36-22a7-250e0069157f",
							"code": "DataGrid_8y39725DS_UsrStatus",
							"caption": "#ResourceString(DataGrid_8y39725DS_UsrStatus)#",
							"dataValueType": 10,
							"width": 119
						},
						{
							"id": "6f701e79-fa88-150f-dffd-6b5a58b31ca3",
							"code": "DataGrid_8y39725DS_UsrOwnerName",
							"caption": "#ResourceString(DataGrid_8y39725DS_UsrOwnerName)#",
							"dataValueType": 28
						}
					],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_wqq24z0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3l7ovaq",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3l7ovaq_title)#",
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
				"parentName": "TabContainer_bca8j54",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ducuhvk",
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
				"parentName": "ExpansionPanel_3l7ovaq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_owvg1vb",
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
				"parentName": "GridContainer_ducuhvk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_vypr0e6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vypr0e6_caption)#",
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
							"dataSourceName": "GridDetail_9ilj70tDS"
						}
					}
				},
				"parentName": "FlexContainer_owvg1vb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_y4dkom7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_y4dkom7_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_owvg1vb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_kf8rxsx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_kf8rxsx_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_9ilj70t"
						}
					}
				},
				"parentName": "Button_y4dkom7",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_lm8skvm",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_lm8skvm_caption)#",
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
				"parentName": "Button_y4dkom7",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_i1t2yxt",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_i1t2yxt_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_i1t2yxt_GridDetail_9ilj70t",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_9ilj70t"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_i1t2yxt_SearchValue",
							"SearchFilter_i1t2yxt_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_owvg1vb",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_uz0neq0",
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
				"parentName": "ExpansionPanel_3l7ovaq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_uqoy28d",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
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
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_uqoy28d",
					"primaryColumnName": "DataGrid_uqoy28dDS_Id",
					"columns": [
						{
							"id": "7e1b5216-a589-79d9-3f92-a7e6271056c3",
							"code": "DataGrid_uqoy28dDS_UsrName",
							"caption": "#ResourceString(DataGrid_uqoy28dDS_UsrName)#",
							"dataValueType": 27
						},
						{
							"id": "b72c5d7c-c573-e063-ddc0-4e689b806031",
							"code": "DataGrid_uqoy28dDS_UsrIssueType",
							"caption": "#ResourceString(DataGrid_uqoy28dDS_UsrIssueType)#",
							"dataValueType": 10
						},
						{
							"id": "3cd337c8-a05a-2626-382f-76dcd082b6b6",
							"code": "DataGrid_uqoy28dDS_UsrStatus",
							"caption": "#ResourceString(DataGrid_uqoy28dDS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "74e8746f-b521-cd8f-5996-ba2d3cabc8d3",
							"code": "DataGrid_uqoy28dDS_UsrOwner",
							"caption": "#ResourceString(DataGrid_uqoy28dDS_UsrOwner)#",
							"dataValueType": 10
						}
					],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_uz0neq0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_1k68bu9",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_1k68bu9_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_09hpzef",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_09hpzef_title)#",
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
				"parentName": "TabContainer_1k68bu9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ioa96qg",
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
				"parentName": "ExpansionPanel_09hpzef",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_xpi28ws",
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
				"parentName": "GridContainer_ioa96qg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7hyyfod",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7hyyfod_caption)#",
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
									"value": "$Id"
								},
								{
									"attributeName": "UsrIssueType",
									"value": "ec52ab9f-8651-4ff4-89ec-9baab86f7a6a"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_xpi28ws",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_25wr0xt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_25wr0xt_caption)#",
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
							"dataSourceName": "GridDetail_uz6ulfdDS"
						}
					}
				},
				"parentName": "FlexContainer_xpi28ws",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_6mbq0zi",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_6mbq0zi_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_xpi28ws",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_bpbpupr",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_bpbpupr_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_uz6ulfd"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6mbq0zi",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gaxnw14",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gaxnw14_caption)#",
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
				"parentName": "GridDetailSettingsBtn_6mbq0zi",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_oleawzy",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_oleawzy_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_oleawzy_GridDetail_uz6ulfd",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_uz6ulfd"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_oleawzy_SearchValue",
							"GridDetailSearchFilter_oleawzy_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_xpi28ws",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_tv9ns0n",
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
				"parentName": "ExpansionPanel_09hpzef",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_uz6ulfd",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
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
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_uz6ulfd",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_uz6ulfdDS_Id",
					"columns": [
						{
							"id": "e48dd5bc-2f24-ed5f-1d53-84fca519535c",
							"code": "GridDetail_uz6ulfdDS_UsrName",
							"caption": "#ResourceString(GridDetail_uz6ulfdDS_UsrName)#",
							"dataValueType": 27
						},
						{
							"id": "de89d032-a621-e56f-a2ab-7a263a44deaf",
							"code": "GridDetail_uz6ulfdDS_UsrStatus",
							"caption": "#ResourceString(GridDetail_uz6ulfdDS_UsrStatus)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_tv9ns0n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_qrmz0as",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_qrmz0as_title)#",
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
				"parentName": "TabContainer_1k68bu9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_sps18el",
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
				"parentName": "ExpansionPanel_qrmz0as",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gk63x3x",
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
				"parentName": "GridContainer_sps18el",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_5ixyvbx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_5ixyvbx_caption)#",
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
									"attributeName": "UsrIssueType",
									"value": "baf772c1-3598-4e0e-98cd-9fc845f15431"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_gk63x3x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ukb0ofo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ukb0ofo_caption)#",
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
							"dataSourceName": "GridDetail_gw2gbcbDS"
						}
					}
				},
				"parentName": "FlexContainer_gk63x3x",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_pz0dfcp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_pz0dfcp_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gk63x3x",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_aelbt9i",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_aelbt9i_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_gw2gbcb"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pz0dfcp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9cnwaee",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9cnwaee_caption)#",
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
				"parentName": "GridDetailSettingsBtn_pz0dfcp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_t7zuqfl",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_t7zuqfl_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_t7zuqfl_GridDetail_gw2gbcb",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gw2gbcb"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_t7zuqfl_SearchValue",
							"GridDetailSearchFilter_t7zuqfl_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_gk63x3x",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zmkajs5",
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
				"parentName": "ExpansionPanel_qrmz0as",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gw2gbcb",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
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
					"items": "$GridDetail_gw2gbcb",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gw2gbcbDS_Id",
					"columns": [
						{
							"id": "0396a163-28e4-9151-259f-5b4919b0ece6",
							"code": "GridDetail_gw2gbcbDS_UsrName",
							"caption": "#ResourceString(GridDetail_gw2gbcbDS_UsrName)#",
							"dataValueType": 27
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_zmkajs5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_mzx4gfn",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_mzx4gfn_title)#",
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
				"parentName": "TabContainer_1k68bu9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_xv2gtca",
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
				"parentName": "ExpansionPanel_mzx4gfn",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8ldnn8i",
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
				"parentName": "GridContainer_xv2gtca",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_xgsrblx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_xgsrblx_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrIssue"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_8ldnn8i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_ifmqxcr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ifmqxcr_caption)#",
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
							"dataSourceName": "GridDetail_uz6ulfdDS"
						}
					}
				},
				"parentName": "FlexContainer_8ldnn8i",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_fwne6o9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_fwne6o9_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_8ldnn8i",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_vmwhh0w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_vmwhh0w_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_uz6ulfd"
						}
					}
				},
				"parentName": "Button_fwne6o9",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_3qzcmem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_3qzcmem_caption)#",
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
				"parentName": "Button_fwne6o9",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_kbcrxej",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_kbcrxej_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_kbcrxej_GridDetail_uz6ulfd",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_uz6ulfd"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_kbcrxej_SearchValue",
							"SearchFilter_kbcrxej_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_8ldnn8i",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_b1der7e",
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
				"parentName": "ExpansionPanel_mzx4gfn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_lj88hre",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
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
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_lj88hre",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_lj88hreDS_Id",
					"columns": [
						{
							"id": "085685b9-32ad-91c5-0a9c-991aa0b90a96",
							"code": "DataGrid_lj88hreDS_UsrName",
							"caption": "#ResourceString(DataGrid_lj88hreDS_UsrName)#",
							"dataValueType": 27
						},
						{
							"id": "d0f9cdaf-dbf0-90ac-61e9-6eccaa3a29c4",
							"code": "DataGrid_lj88hreDS_UsrStatus",
							"caption": "#ResourceString(DataGrid_lj88hreDS_UsrStatus)#",
							"dataValueType": 10
						}
					]
				},
				"parentName": "GridContainer_b1der7e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_b2zw6va",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_b2zw6va_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bt2as1t",
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
				"parentName": "TabContainer_b2zw6va",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ro5e4jy",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ro5e4jy_title)#",
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
				"parentName": "TabContainer_b2zw6va",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_vaehzev",
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
				"parentName": "ExpansionPanel_ro5e4jy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ibp3mnm",
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
				"parentName": "GridContainer_vaehzev",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_fndmntp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_fndmntp_caption)#",
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
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ibp3mnm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_avqx3l6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_avqx3l6_caption)#",
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
							"dataSourceName": "GridDetail_pmeuemcDS"
						}
					}
				},
				"parentName": "FlexContainer_ibp3mnm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_8xtbj54",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_8xtbj54_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ibp3mnm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ok50o0f",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ok50o0f_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_pmeuemc"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_8xtbj54",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7choxva",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7choxva_caption)#",
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
				"parentName": "GridDetailSettingsBtn_8xtbj54",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_rq0qm38",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_rq0qm38_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_rq0qm38_GridDetail_pmeuemc",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_pmeuemc"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_rq0qm38_SearchValue",
							"GridDetailSearchFilter_rq0qm38_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ibp3mnm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ywg5ulh",
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
				"parentName": "ExpansionPanel_ro5e4jy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pmeuemc",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_pmeuemc",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_pmeuemcDS_Id",
					"columns": [
						{
							"id": "8c91a3b6-13a4-a610-85cf-9494374c702b",
							"code": "GridDetail_pmeuemcDS_UsrName",
							"caption": "#ResourceString(GridDetail_pmeuemcDS_UsrName)#",
							"dataValueType": 27
						},
						{
							"id": "6cb3d79e-fc0a-57f1-dae3-db9fa335ce9d",
							"code": "GridDetail_pmeuemcDS_UsrDocType",
							"caption": "#ResourceString(GridDetail_pmeuemcDS_UsrDocType)#",
							"dataValueType": 10
						},
						{
							"id": "19ecb91d-a233-582a-1102-f290d0801e88",
							"code": "GridDetail_pmeuemcDS_UsrFileURL",
							"caption": "#ResourceString(GridDetail_pmeuemcDS_UsrFileURL)#",
							"dataValueType": 44
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ywg5ulh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_psbkrxd",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_psbkrxd_title)#",
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
				"parentName": "TabContainer_b2zw6va",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_zrjlg7q",
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
				"parentName": "ExpansionPanel_psbkrxd",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_23jqa72",
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
				"parentName": "GridContainer_zrjlg7q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_1ann1m8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_1ann1m8_caption)#",
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
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_23jqa72",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_0amcais",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_0amcais_caption)#",
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
							"dataSourceName": "GridDetail_pmeuemcDS"
						}
					}
				},
				"parentName": "FlexContainer_23jqa72",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_rf5tnj3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_rf5tnj3_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_23jqa72",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_tlxz4xd",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_tlxz4xd_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_pmeuemc"
						}
					}
				},
				"parentName": "Button_rf5tnj3",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_j0x4bqn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_j0x4bqn_caption)#",
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
				"parentName": "Button_rf5tnj3",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_ng69ej8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_ng69ej8_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_ng69ej8_DataGrid_hd5jjlz",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_hd5jjlz"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_ng69ej8_SearchValue",
							"SearchFilter_ng69ej8_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_23jqa72",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_y02g3yk",
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
				"parentName": "ExpansionPanel_psbkrxd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_hd5jjlz",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 11
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": true
						},
						"editable": {
							"enable": true,
							"itemsCreation": true,
							"floatingEditPanel": true
						}
					},
					"items": "$DataGrid_hd5jjlz",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_hd5jjlzDS_Id",
					"columns": [
						{
							"id": "3e537852-ab15-cb7c-20b2-d3bf7e951804",
							"code": "DataGrid_hd5jjlzDS_UsrName",
							"caption": "#ResourceString(DataGrid_hd5jjlzDS_UsrName)#",
							"dataValueType": 27
						},
						{
							"id": "780a8358-1749-cf73-f54d-a3dc327667ba",
							"code": "DataGrid_hd5jjlzDS_UsrFileURL",
							"caption": "#ResourceString(DataGrid_hd5jjlzDS_UsrFileURL)#",
							"dataValueType": 44
						},
						{
							"id": "adc8a027-029e-f47b-8a39-1b33faa23b61",
							"code": "DataGrid_hd5jjlzDS_UsrOwner",
							"caption": "#ResourceString(DataGrid_hd5jjlzDS_UsrOwner)#",
							"dataValueType": 10
						}
					]
				},
				"parentName": "GridContainer_y02g3yk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_vsy0tzh",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_vsy0tzh_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_oaqmpjb",
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
				"parentName": "TabContainer_vsy0tzh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_jhwhxem",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_jhwhxem_title)#",
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
				"parentName": "TabContainer_vsy0tzh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_6d7zvjv",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
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
				"parentName": "ExpansionPanel_jhwhxem",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_i5hsz9h",
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
				"parentName": "GridContainer_6d7zvjv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_dogfw7o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_dogfw7o_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddSupportEpic",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "Project"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_i5hsz9h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_nul7pgp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_nul7pgp_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"refreshDataConfig": {
								"mode": "RefreshAll"
							}
						}
					},
					"clickMode": "default",
					"icon": "reload-icon",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_6d7zvjv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_qjzmk4m",
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
				"parentName": "ExpansionPanel_jhwhxem",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_wrej71l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 8
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false
						},
						"columns": {
							"resizing": false,
							"dragAndDrop": false
						}
					},
					"items": "$DataGrid_wrej71l",
					"primaryColumnName": "DataGrid_wrej71lDS_Id",
					"columns": [
						{
							"id": "f697477d-c366-5525-4e0b-8a2906753e2e",
							"code": "DataGrid_wrej71lDS_UsrEpicName",
							"caption": "#ResourceString(DataGrid_wrej71lDS_UsrEpicName)#",
							"dataValueType": 28
						},
						{
							"id": "04a82615-6182-8208-ffcd-ad624143aa6a",
							"code": "DataGrid_wrej71lDS_UsrRole_Name",
							"caption": "#ResourceString(DataGrid_wrej71lDS_UsrRole_Name)#",
							"dataValueType": 28,
							"width": 212.00001525878906
						},
						{
							"id": "ffc1412e-1028-c662-5c9c-4d0b9dfbe16c",
							"code": "DataGrid_wrej71lDS_UsrEstimatedTime",
							"caption": "#ResourceString(DataGrid_wrej71lDS_UsrEstimatedTime)#",
							"dataValueType": 31
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_qjzmk4m",
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
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"Parameter_twbhthb": {
						"modelConfig": {
							"path": "PDS.UsrCustomer"
						}
					},
					"PDS_UsrSummary_j3fwxp5": {
						"modelConfig": {
							"path": "PDS.UsrSummary"
						}
					},
					"PDS_UsrCustomerRef_l37q5ty": {
						"modelConfig": {
							"path": "PDS.UsrCustomerRef"
						}
					},
					"PDS_UsrSalesRef_79vms97": {
						"modelConfig": {
							"path": "PDS.UsrSalesRef"
						}
					},
					"PDS_UsrLeadBA_ow0bpc2": {
						"modelConfig": {
							"path": "PDS.UsrLeadBA"
						}
					},
					"PDS_UsrLeadTech_8crksa8": {
						"modelConfig": {
							"path": "PDS.UsrLeadTech"
						}
					},
					"PDS_UsrTestManager_qg2yxhr": {
						"modelConfig": {
							"path": "PDS.UsrTestManager"
						}
					},
					"PDS_UsrCustomer_8yrexg8": {
						"modelConfig": {
							"path": "PDS.UsrCustomer"
						}
					},
					"GridDetail_9ilj70t": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_9ilj70tDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_bsj33yd_GridDetail_9ilj70t",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_9ilj70t_PredefinedFilter"
								},
								{
									"name": "SearchFilter_i1t2yxt_GridDetail_9ilj70t",
									"loadOnChange": true
								},
								{
									"name": "SearchFilter_g8aqaly_GridDetail_9ilj70t",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrOwnerName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_9ilj70tDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.UsrName"
									}
								},
								"GridDetail_9ilj70tDS_UsrIssueTypeName": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.UsrIssueTypeName"
									}
								},
								"GridDetail_9ilj70tDS_UsrItemType": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.UsrItemType"
									}
								},
								"GridDetail_9ilj70tDS_UsrComplexity": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.UsrComplexity"
									}
								},
								"GridDetail_9ilj70tDS_UsrMaturity": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.UsrMaturity"
									}
								},
								"GridDetail_9ilj70tDS_UsrStatus": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.UsrStatus"
									}
								},
								"GridDetail_9ilj70tDS_Id": {
									"modelConfig": {
										"path": "GridDetail_9ilj70tDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_pmeuemc": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_pmeuemcDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_pmeuemc_PredefinedFilter"
								},
								{
									"name": "GridDetailSearchFilter_rq0qm38_GridDetail_pmeuemc",
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
								"GridDetail_pmeuemcDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_pmeuemcDS.UsrName"
									}
								},
								"GridDetail_pmeuemcDS_UsrDocType": {
									"modelConfig": {
										"path": "GridDetail_pmeuemcDS.UsrDocType"
									}
								},
								"GridDetail_pmeuemcDS_UsrFileURL": {
									"modelConfig": {
										"path": "GridDetail_pmeuemcDS.UsrFileURL"
									}
								},
								"GridDetail_pmeuemcDS_Id": {
									"modelConfig": {
										"path": "GridDetail_pmeuemcDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrPhaseCompleted_jj7zrmg": {
						"modelConfig": {
							"path": "PDS.UsrPhaseCompleted"
						}
					},
					"PDS_UsrPhase_f7n3dwc": {
						"modelConfig": {
							"path": "PDS.UsrPhase"
						}
					},
					"GridDetail_9ilj70t_PredefinedFilter": {
						"value": {
							"items": {
								"2f83fb40-66bc-4f4c-9c01-3f5eb099fe71": {
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
													"Name": "Epic",
													"Id": "1e2698fc-0ea8-43bc-8fc3-61e401f7b525",
													"value": "1e2698fc-0ea8-43bc-8fc3-61e401f7b525",
													"displayValue": "Epic"
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
					"DataGrid_uqoy28d": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_uqoy28dDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_uqoy28d_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_uqoy28dDS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_uqoy28dDS.UsrName"
									}
								},
								"DataGrid_uqoy28dDS_UsrIssueType": {
									"modelConfig": {
										"path": "DataGrid_uqoy28dDS.UsrIssueType"
									}
								},
								"DataGrid_uqoy28dDS_UsrStatus": {
									"modelConfig": {
										"path": "DataGrid_uqoy28dDS.UsrStatus"
									}
								},
								"DataGrid_uqoy28dDS_UsrOwner": {
									"modelConfig": {
										"path": "DataGrid_uqoy28dDS.UsrOwner"
									}
								},
								"DataGrid_uqoy28dDS_Id": {
									"modelConfig": {
										"path": "DataGrid_uqoy28dDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_uqoy28d_PredefinedFilter": {
						"value": {
							"items": {
								"a4ccd3fc-2a1c-4942-ab74-d0ff8a041797": {
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
					"GridDetail_uz6ulfd": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_uz6ulfdDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_oleawzy_GridDetail_uz6ulfd",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_uz6ulfd_PredefinedFilter"
								},
								{
									"name": "SearchFilter_kbcrxej_GridDetail_uz6ulfd",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_uz6ulfdDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_uz6ulfdDS.UsrName"
									}
								},
								"GridDetail_uz6ulfdDS_UsrStatus": {
									"modelConfig": {
										"path": "GridDetail_uz6ulfdDS.UsrStatus"
									}
								},
								"GridDetail_uz6ulfdDS_Id": {
									"modelConfig": {
										"path": "GridDetail_uz6ulfdDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_uz6ulfd_PredefinedFilter": {
						"value": {
							"items": {
								"d3ed710d-df0e-4119-829d-b6b7e3a98244": {
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
													"Name": "Sprint",
													"Id": "ec52ab9f-8651-4ff4-89ec-9baab86f7a6a",
													"value": "ec52ab9f-8651-4ff4-89ec-9baab86f7a6a",
													"displayValue": "Sprint"
												}
											}
										}
									]
								},
								"5b1852f6-daf2-4377-aed5-f93ed92025b0": {
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
										},
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
					"DataGrid_lj88hre": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_lj88hreDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_lj88hre_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_lj88hreDS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_lj88hreDS.UsrName"
									}
								},
								"DataGrid_lj88hreDS_UsrStatus": {
									"modelConfig": {
										"path": "DataGrid_lj88hreDS.UsrStatus"
									}
								},
								"DataGrid_lj88hreDS_Id": {
									"modelConfig": {
										"path": "DataGrid_lj88hreDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_lj88hre_PredefinedFilter": {
						"value": {
							"items": {
								"c4b5cc68-6793-4a67-bb7e-fa740ac9d86e": {
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
								},
								"bbfc12bb-6814-4a57-a4bf-bfe959a288dd": {
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
													"Name": "Release",
													"Id": "baf772c1-3598-4e0e-98cd-9fc845f15431",
													"value": "baf772c1-3598-4e0e-98cd-9fc845f15431",
													"displayValue": "Release"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Sprint",
													"Id": "ec52ab9f-8651-4ff4-89ec-9baab86f7a6a",
													"value": "ec52ab9f-8651-4ff4-89ec-9baab86f7a6a",
													"displayValue": "Sprint"
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
					"GridDetail_pmeuemc_PredefinedFilter": {
						"value": {
							"items": {
								"ee4c4eff-3661-40bc-8023-eac47b7ff737": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrDocType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrDocumentType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "HLD",
													"Id": "c492ce4a-8a48-438c-9343-be155faef2bf",
													"value": "c492ce4a-8a48-438c-9343-be155faef2bf",
													"displayValue": "HLD"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Memo",
													"Id": "94f10152-a14d-48b5-b35c-773e00e86e19",
													"value": "94f10152-a14d-48b5-b35c-773e00e86e19",
													"displayValue": "Memo"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "ReleaseNote",
													"Id": "9e1c1437-f3e8-4114-9fee-ce4f4b976aa5",
													"value": "9e1c1437-f3e8-4114-9fee-ce4f4b976aa5",
													"displayValue": "ReleaseNote"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Sizing",
													"Id": "b5fa4784-4171-41ca-b2cd-274650f4103a",
													"value": "b5fa4784-4171-41ca-b2cd-274650f4103a",
													"displayValue": "Sizing"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrDocument"
						}
					},
					"DataGrid_hd5jjlz": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_hd5jjlzDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_hd5jjlz_PredefinedFilter"
								},
								{
									"name": "SearchFilter_ng69ej8_DataGrid_hd5jjlz",
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
								"DataGrid_hd5jjlzDS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_hd5jjlzDS.UsrName"
									}
								},
								"DataGrid_hd5jjlzDS_UsrFileURL": {
									"modelConfig": {
										"path": "DataGrid_hd5jjlzDS.UsrFileURL"
									}
								},
								"DataGrid_hd5jjlzDS_UsrOwner": {
									"modelConfig": {
										"path": "DataGrid_hd5jjlzDS.UsrOwner"
									}
								},
								"DataGrid_hd5jjlzDS_Id": {
									"modelConfig": {
										"path": "DataGrid_hd5jjlzDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_hd5jjlz_PredefinedFilter": {
						"value": {
							"items": {
								"f8436d7e-9cad-4922-b654-053142008ded": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrDocType"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "UsrDocumentType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Epic",
													"Id": "79338b09-11c0-4175-af25-6d5090ccd2c0",
													"value": "79338b09-11c0-4175-af25-6d5090ccd2c0",
													"displayValue": "Epic"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "UsrDocument"
						}
					},
					"UsrCustomerPrimaryContactOwner": {
						"modelConfig": {
							"path": "PDS.UsrCustomerPrimaryContactOwner"
						}
					},
					"CreatedByAccountPrimaryContact": {
						"modelConfig": {
							"path": "PDS.CreatedByAccountPrimaryContact"
						}
					},
					"CommunicationOptions_5mo4q2s": {
						"isCollection": true,
						"modelConfig": {
							"path": "CommunicationOptions_5mo4q2sDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"CommunicationOptions_5mo4q2sDS_CreatedOn": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.CreatedOn"
									}
								},
								"CommunicationOptions_5mo4q2sDS_Number": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.Number"
									}
								},
								"CommunicationOptions_5mo4q2sDS_Primary": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.Primary"
									}
								},
								"CommunicationOptions_5mo4q2sDS_NonActual": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.NonActual"
									}
								},
								"CommunicationOptions_5mo4q2sDS_CommunicationType": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.CommunicationType"
									}
								},
								"CommunicationOptions_5mo4q2sDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.CommunicationTypeDisplayFormat"
									}
								},
								"CommunicationOptions_5mo4q2sDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.CommunicationTypeName"
									}
								},
								"CommunicationOptions_5mo4q2sDS_Id": {
									"modelConfig": {
										"path": "CommunicationOptions_5mo4q2sDS.Id"
									}
								}
							}
						}
					},
					"UsrCustomerOwner": {
						"modelConfig": {
							"path": "PDS.UsrCustomerOwner"
						}
					},
					"UsrCustomerRefOwner": {
						"modelConfig": {
							"path": "PDS.UsrCustomerRefOwner"
						}
					},
					"CommunicationOptions_j3vvgza": {
						"isCollection": true,
						"modelConfig": {
							"path": "CommunicationOptions_j3vvgzaDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"CommunicationOptions_j3vvgzaDS_CreatedOn": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.CreatedOn"
									}
								},
								"CommunicationOptions_j3vvgzaDS_Number": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.Number"
									}
								},
								"CommunicationOptions_j3vvgzaDS_Primary": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.Primary"
									}
								},
								"CommunicationOptions_j3vvgzaDS_NonActual": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.NonActual"
									}
								},
								"CommunicationOptions_j3vvgzaDS_CommunicationType": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.CommunicationType"
									}
								},
								"CommunicationOptions_j3vvgzaDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.CommunicationTypeDisplayFormat"
									}
								},
								"CommunicationOptions_j3vvgzaDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.CommunicationTypeName"
									}
								},
								"CommunicationOptions_j3vvgzaDS_Id": {
									"modelConfig": {
										"path": "CommunicationOptions_j3vvgzaDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_gw2gbcb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gw2gbcbDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_t7zuqfl_GridDetail_gw2gbcb",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_gw2gbcb_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gw2gbcbDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_gw2gbcbDS.UsrName"
									}
								},
								"GridDetail_gw2gbcbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gw2gbcbDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_gw2gbcb_PredefinedFilter": {
						"value": {
							"items": {
								"f1470dd1-d669-4348-b1cf-8b0e92ced2e3": {
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
													"Name": "Release",
													"Id": "baf772c1-3598-4e0e-98cd-9fc845f15431",
													"value": "baf772c1-3598-4e0e-98cd-9fc845f15431",
													"displayValue": "Release"
												}
											}
										}
									]
								},
								"758fc10e-b9d7-4f5c-a5f1-3e94cc160dde": {
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
										},
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
										},
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
					"DataGrid_wrej71l": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_wrej71lDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_wrej71l_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrRole_Name"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_wrej71lDS_UsrEpicName": {
									"modelConfig": {
										"path": "DataGrid_wrej71lDS.UsrEpicName"
									}
								},
								"DataGrid_wrej71lDS_UsrRole_Name": {
									"modelConfig": {
										"path": "DataGrid_wrej71lDS.UsrRole_Name"
									}
								},
								"DataGrid_wrej71lDS_UsrEstimatedTime": {
									"modelConfig": {
										"path": "DataGrid_wrej71lDS.UsrEstimatedTime"
									}
								},
								"DataGrid_wrej71lDS_Id": {
									"modelConfig": {
										"path": "DataGrid_wrej71lDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_wrej71l_PredefinedFilter": {
						"value": {
							"items": {
								"319a9220-991d-4742-a24d-abe54a90ee73": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "UsrEpic.UsrItemType"
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
							"rootSchemaName": "UsrSizingTool"
						}
					},
					"DataGrid_8y39725": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_8y39725DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_8y39725DS_UsrName": {
									"modelConfig": {
										"path": "DataGrid_8y39725DS.UsrName"
									}
								},
								"DataGrid_8y39725DS_UsrIssueTypeName": {
									"modelConfig": {
										"path": "DataGrid_8y39725DS.UsrIssueTypeName"
									}
								},
								"DataGrid_8y39725DS_UsrStatus": {
									"modelConfig": {
										"path": "DataGrid_8y39725DS.UsrStatus"
									}
								},
								"DataGrid_8y39725DS_UsrOwnerName": {
									"modelConfig": {
										"path": "DataGrid_8y39725DS.UsrOwnerName"
									}
								},
								"DataGrid_8y39725DS_Id": {
									"modelConfig": {
										"path": "DataGrid_8y39725DS.Id"
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
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_9ilj70tDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_uqoy28dDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_uz6ulfdDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_lj88hreDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_hd5jjlzDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_pmeuemcDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_gw2gbcbDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_8y39725DS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_wrej71lDS": [
							{
								"attributePath": "UsrProject",
								"relationPath": "PDS.Id"
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
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRVCProject",
							"attributes": {
								"UsrCustomerPrimaryContactOwner": {
									"path": "UsrCustomer.PrimaryContact.Owner",
									"type": "ForwardReference"
								},
								"CreatedByAccountPrimaryContact": {
									"path": "CreatedBy.Account.PrimaryContact",
									"type": "ForwardReference"
								},
								"UsrCustomerOwner": {
									"path": "UsrCustomer.Owner",
									"type": "ForwardReference"
								},
								"UsrCustomerRefOwner": {
									"path": "UsrCustomerRef.Owner",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_9ilj70tDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrIssueTypeName": {
									"type": "ForwardReference",
									"path": "UsrIssueType.Name"
								},
								"UsrItemType": {
									"path": "UsrItemType"
								},
								"UsrComplexity": {
									"path": "UsrComplexity"
								},
								"UsrMaturity": {
									"path": "UsrMaturity"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								}
							}
						}
					},
					"GridDetail_pmeuemcDS": {
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
					"DataGrid_uqoy28dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrIssueType": {
									"path": "UsrIssueType"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								}
							}
						}
					},
					"GridDetail_uz6ulfdDS": {
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
								}
							}
						}
					},
					"DataGrid_lj88hreDS": {
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
								}
							}
						}
					},
					"DataGrid_hd5jjlzDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrDocument",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrFileURL": {
									"path": "UsrFileURL"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								}
							}
						}
					},
					"CommunicationOptions_5mo4q2sDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"CommunicationOptions_j3vvgzaDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"GridDetail_gw2gbcbDS": {
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
					"DataGrid_wrej71lDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrSizingTool",
							"attributes": {
								"UsrEpicName": {
									"path": "UsrEpicName"
								},
								"UsrRole_Name": {
									"type": "ForwardReference",
									"path": "UsrRole.Name"
								},
								"UsrEstimatedTime": {
									"path": "UsrEstimatedTime"
								}
							}
						}
					},
					"DataGrid_8y39725DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrIssue",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrIssueTypeName": {
									"type": "ForwardReference",
									"path": "UsrIssueType.Name"
								},
								"UsrStatus": {
									"path": "UsrStatus"
								},
								"UsrOwnerName": {
									"type": "ForwardReference",
									"path": "UsrOwner.Name"
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