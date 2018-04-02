import React, { Component } from 'react';
import { Route } from "react-router-dom";

import TopNavbar from '../containers/TopNavbar';
import Sidebar from '../containers/Sidebar';

import Panels from '../pages/Panels';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hiddenSidebar: false,
			width: 0,
			height: 0
		};
		this.handleClickHideSidebar	= this.handleClickHideSidebar.bind(this)
		this.updateWindowDimensions	= this.updateWindowDimensions.bind(this);
	}
	
	async componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	//Keeping track of window height for page-container to get footer at bottom of page.
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight - 48 });
	}

	handleClickHideSidebar(e) {
		e.preventDefault()
		if (this.state.hiddenSidebar)
			this.setState({ hiddenSidebar: false })
		else
			this.setState({ hiddenSidebar: true })
	}
	
	render() {
		var AppStyle = {minHeight: this.state.height};

		return (
				<div className="App">
					<TopNavbar handleClickHideSidebar={this.handleClickHideSidebar} />
					<div className="page-container" style={AppStyle}>
						<div className={this.state.hiddenSidebar ? 'page-content sidebar-xs sidebar-mobile-main' : 'page-content'}>
							<Sidebar />
							<Route component={Panels} />
						</div>
					</div>
				</div>
			);
	}
}
export default App;