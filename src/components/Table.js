import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Label, DropdownButton, MenuItem	} from "react-bootstrap";

const $ = require('jquery');

class Table extends Component {
	constructor(props) {
		super(props);

		this.renderCell	= this.renderCell.bind(this);
		//this.doSomething = this.doSomething.bind(this);
		this.state = { 
			columns: [], 
			rows: []  
		};
		// this.state	= {
		// 		tableJSON	: {
		// 				columns : [
		// 					{key: "MName",		label: "Merchant Name", showInFooter: true, headerClass: ""},
		// 					{key: "MIDID",		label: "MID ID", showInFooter: true, headerClass: ""},
		// 					{key: "MIDName",	label: "MID Name", showInFooter: true, headerClass: ""},
		// 					{key: "Proc",			label: "Processor", showInFooter: true, headerClass: ""},
		// 					{key: "CDate",		label: "Create Date", showInFooter: true, headerClass: ""},
		// 					{key: "LUDate",		label: "Last Used Date", showInFooter: true, headerClass: ""},
		// 					{key: "Options",	label: "Options", showInFooter: true, headerClass: ""},
		// 					{key: "Rules",		label: "Rules Applied", showInFooter: true, headerClass: ""},
		// 					{key: "Status",		label: "Status", showInFooter: true, headerClass: ""},
		// 					{key: "Actions",	label: "Actions", showInFooter: true, headerClass: "text-center"}
		// 				],
		// 				rows: [
		// 					{
		// 						"RowID":		"12345678",
		// 						"MName":		"Merchant Name",
		// 						"MIDID":		"1234",
		// 						"MIDName":	"General Trust",
		// 						"Proc":			"TheProcessor",
		// 						"CDate":		"2017/02/05",
		// 						"LUDate":		"2017/03/27",
		// 						"Options":	"Fee",
		// 						"Rules":		"1",
		// 						"Status": 	"Active"
		// 					},
		// 					{
		// 						"RowID":		"12345679",
		// 						"MName":		"Merchant Name",
		// 						"MIDID":		"1235",
		// 						"MIDName":	"Special Trust",
		// 						"Proc":			"TheProcessor",
		// 						"CDate":		"2017/02/05",
		// 						"LUDate":		"2017/03/27",
		// 						"Options":	"Fee",
		// 						"Rules":		"2",
		// 						"Status": 	"Active"
		// 					},
		// 					{
		// 						"RowID":		"12345680",
		// 						"MName":		"Other Merchant Name",
		// 						"MIDID":		"1501",
		// 						"MIDName":	"General Trust",
		// 						"Proc":			"Base Commerce",
		// 						"CDate":		"2017/02/05",
		// 						"LUDate":		"2017/03/27",
		// 						"Options":	"",
		// 						"Rules":		"0",
		// 						"Status": 	"Disabled"
		// 					},
		// 				],
		// 		}
		// } 
	} 
	//newEntry = {rowId : "aasdfasdf", Mname: "dfasdfsafd", }
	addToTable(newEntry){
			//does row ID auto increment?
			this.state.rows.push(newEntry);
			console.log(this.state);
	}
	editExisitingRowInTable(column, rowId, data){
		/* 
		it looks like state has 2 attributes which are 2 arrays, the table and the rows,
		rowId is the specific record to access 
		columnId is the specific information from the record we got from the rowId
		*/

		let tableColumns = this.state.columns;
		let rows = this.state.rows;
		
		for(var row in this.state.rows){
			if(row.RowId == rowId){
				row.column = data;
			}
		}

	//	let retrievedValue = database[rowID][ColumnID];
	//	database[rowId][ColumnID] = data;


	
	}

	renderCell(rowNum, colNum, cellData, rowData, colKey) {
		/***** KEVIN, START HERE ******/

		/* */
		/*  
		 * The concept was to make this a generic table generator, and the data would define what kind of actions to list on the page
		 * Help me: 
		 * 1) Pass data to an action relative to the row it's on (within the loop - not hard coded)
		 * 		1a) find out the best way to navigate to another page with that data being passed to the page
		 * 
		 * and:
		 * 
		 * 2) your thoughts on a dropdown component that has parameters passed to it to change the actions being listed...
		 * 		(for example, if I have normally 3 actions, but based on the value of the "Status" column, the 3rd action is disabled for this row...
		 * 				i.e. you can't Disable a row if it's already disabled, so don't let them click it)
		 * 
		 * Maybe a table generator was too ambitious, but I would like the end users to be able to change the column order, header labels, etc and don't want to make custom
		 * table objects for 50-different report outputs 
		 */
		if (colKey === "Actions")
			return (
				<td>
				<DropdownButton	title={<span><i className="icon-menu9"></i></span>} className="noCaret pullRight dropUp" id={"dropdown_"+rowNum}>
					<MenuItem onClick={() => {this.doSomething('hello')}}><i className="icon-file-pdf"></i> Action 1</MenuItem>
					<MenuItem><i className="icon-file-pdf"></i> Action 2</MenuItem>
				</DropdownButton>
			</td>);
		/******************************/
		return <td key={rowNum + '' + colNum}>{cellData}</td>;
	}

	render() {
		return (
	
				<table className="table datatable responsive">
				<input type="Button" value="New Entry" onClick="addToTable();" />
				<br>
				<input type="text"
					<thead>
						<tr>
							{this.state.columns.map((colData) => <th key={colData.key}>{colData.label}</th>)}
						</tr>
					</thead>
					<tbody>
						{this.state.rows.map((rowData, rowNum) => 
							<tr key={rowNum}>{this.state.columns.map((colData, colNum) => 
								this.renderCell(rowNum, colNum, rowData[colData.key], rowData, colData.key))}
							</tr>)}
					</tbody>
				</table>
				);
	}
}
export default Table;
