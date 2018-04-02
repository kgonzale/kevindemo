import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { go_MidList } from '../actions/nav';

const mapDispatchToProps = (dispatch) => {
	return {
		go_MidList: () => {
			dispatch(go_MidList());
		}
	}
}

const mapStateToProps = (state) => {
	return { 
		panelLayout: state.nav.panelLayout
		//placeholder to fill in user's information
	};
}

class Sidebar extends Component {

	render() {
		return (
				<div className="sidebar sidebar-main">
				<div className="sidebar-content">

					<div className="sidebar-user">
						<div className="category-content">
							<div className="media">
								<div className="media-body">
									<span className="media-heading text-semibold">Kevin Demo</span>
								</div>
							</div>
						</div>
					</div>

					<div className="sidebar-category sidebar-category-visible">
						<div className="category-content no-padding">
							<ul className="navigation navigation-main navigation-accordion">

								<li><a onClick={this.props.go_MidList}><i className="icon-home4"></i> <span>MID List</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);