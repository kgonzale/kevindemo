import React, {Component} from 'react'
import { connect } from 'react-redux';
import Footer from '../containers/Footer'
import { Link } from "react-router-dom";
import { goBack } from '../actions/nav';


const mapDispatchToProps = (dispatch) => {
	return {
		goBack: () => {
			dispatch(goBack());
		}
	}
}

const mapStateToProps = (state) => {
	return { 
		panelSettings: state.nav.panelSettings
	};
}

class Panels extends Component {

	render() {
		return (
			<div className="content-wrapper">
				<div className="page-header page-header-default">
					<div className="page-header-content">
						<div className="page-title">
							<h4><span className="text-semibold">{this.props.panelSettings.title}</span></h4>
						</div>
					</div>

					<div className="breadcrumb-line">
						<ul className="breadcrumb">
							<li><Link to="/"><i className="icon-home4"></i> <span>Dashboard</span></Link></li>
							<li className="active">My MIDs</li>
						</ul>
					</div>
				</div>

				<div className="content">
					{this.props.panelSettings.panels.map((row, rowNum) => 
						<div className="row" key={rowNum}>{row.map((Col, colNum) => 
							<div className={Col.className} key={rowNum+'_'+colNum }><Col.panel panelID={'panelid_'+rowNum + '' + colNum} panelTitle={Col.panelTitle} panelReloadBool={Col.panelReloadBool} parms={Col.parms} /></div>
							)}</div>
					)}
					<Footer />
				</div>
			</div>
				
)}}
export default connect(mapStateToProps, mapDispatchToProps)(Panels);
