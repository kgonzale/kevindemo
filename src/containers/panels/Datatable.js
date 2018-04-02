import React, {Component} from 'react'
import Table from "../../components/Table";
const $ = require('jquery');
$.DataTable = require('datatables.net');

class Datatable extends Component {
	
	async componentDidMount() {
		$.extend( $.fn.dataTable.defaults, {
			autoWidth: true,
			columnDefs: [{ 
					orderable: false,
					width: '100px',
					targets: [ 9 ]
			}],
			dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
			language: {
					search: '<span>Filter:</span> _INPUT_',
					searchPlaceholder: 'Type to filter...',
					lengthMenu: '<span>Show:</span> _MENU_',
					paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
			},
			drawCallback: function () {
					$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
			},
			preDrawCallback: function() {
					$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
			}
	});

		$('#'+this.props.panelID + ' > .panel-body > .datatable').DataTable({
			initComplete: function () {
					this.api().columns().every( function() {
							var column = this;
							var select = $('<select class="filter-select" data-placeholder="Filter"><option value=""></option></select>')
									.appendTo($(column.footer()).not(':last-child').empty())
									.on('change', function() {
											var val = $.fn.dataTable.util.escapeRegex(
													$(this).val()
											);

											column
													.search( val ? '^'+val+'$' : '', true, false )
													.draw();
									});

							column.data().unique().sort().each( function (d, j) {
									select.append('<option value="'+d+'">'+d+'</option>')
							});
					});
			}
		});

	}

	render() {
		return (
					<div id={this.props.panelID} className="panel panel-flat">
						<div className="panel-heading">
							<h5 className="panel-title">{this.props.panelTitle}</h5>
							{this.props.panelReloadBool?
							<div className="heading-elements not-collapsible">
								<ul className="icons-list">
									<li><a data-action="reload"></a></li>
								</ul>
							</div>:null}
						</div>
						<div className="panel-body">
							<Table />
						</div>
					</div>
)}}
export default Datatable;