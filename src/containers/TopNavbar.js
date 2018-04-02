import React, {Component} from 'react'
import { NavDropdown, MenuItem, Navbar, NavItem, Nav, Label  } from "react-bootstrap";
import { Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Logo from '../assets/images/CHLogo_60.png'

const $ = require('jquery');

class TopNavbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			OnlineUsersLabel: "hidden",
			UserProfileLabel: "hidden"
		};
		this.toggleOnlineUsers	= this.toggleOnlineUsers.bind(this);
		this.toggleUserProfile	= this.toggleUserProfile.bind(this);
		
		this.myhistory = createHistory();
		this.location = this.myhistory.location;
	}
	
	async componentDidMount() {
		// Listen for changes to the current location.
		this.removeHistory = this.myhistory.listen((location, action) => {
			// location is an object like window.location
			console.log(action, location.pathname, location.state);
		})

		// Navbar navigation
		// -------------------------
		
		// Prevent dropdown from closing on click
		$(document).on('click', '.dropdown-content', function (e) {
			e.stopPropagation();
		});
		
		// Disabled links
		$('.navbar-nav .disabled a').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
		
		// Show tabs inside dropdowns
		$('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
			$(this).tab('show');
		});
		
			// Add 'active' class to parent list item in all levels
			$('.navigation').find('li.active').parents('li').addClass('active');

			// Hide all nested lists
			$('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

			// Highlight children links
			$('.navigation').find('li').has('ul').children('a').addClass('has-ul');

			// Add active state to all dropdown parent levels
			$('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');

	}

	toggleOnlineUsers(expanded) {
			this.setState({OnlineUsersLabel : expanded?"":"hidden"});
	}
	toggleUserProfile(expanded) {
		this.setState({UserProfileLabel : expanded?"":"hidden"});
	}

	
	render() {
		return (
				<Navbar fluid inverse collapseOnSelect staticTop>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/"><span><img src={Logo} alt="" />&nbsp;&nbsp; Coalesce Payments</span></Link>
						</Navbar.Brand>
						
						<Nav pullRight bsClass="nav visible-xs-block">
							<NavItem onClick={this.props.handleClickHideSidebar}>
							<i className="icon-menu2"></i>
							</NavItem>
							<NavDropdown onToggle={val => this.toggleOnlineUsers(val)} title={<span><i className="icon-users4"></i><span className={this.state.OnlineUsersLabel}> Online Users</span></span>} id='OnlineUsers'>
									<MenuItem> My profile</MenuItem>
									<MenuItem divider />
									<MenuItem><i className="icon-switch2"></i> Logout</MenuItem>
							</NavDropdown>
							<NavDropdown onToggle={val => this.toggleUserProfile(val)} title={<span> <i className="icon-user"></i><span className={this.state.UserProfileLabel}> Profile</span></span>} id='UserMenu'>
								<MenuItem eventKey="1"><i className="icon-user-plus"></i> My profile</MenuItem>
								<MenuItem divider />
								<MenuItem><i className="icon-switch2"></i> Logout</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem onClick={this.props.handleClickHideSidebar}>
								<i className="icon-menu2"></i>
							</NavItem>
						</Nav>
						<Navbar.Text>
							<Label bsStyle="success">Admin</Label>
						</Navbar.Text>
						
						<Nav pullRight>
							<NavDropdown title={<span><i className="icon-users4"></i> Users</span>} id='OnlineUsers'>
									<MenuItem> My profile</MenuItem>
									<MenuItem divider />
									<MenuItem onClick={this.test}><i className="icon-switch2"></i> Logout</MenuItem>
							</NavDropdown>
	
							<NavDropdown title={<span> <i className="icon-user"></i> Brian Bockhold</span>} id='UserMenu'>
									<MenuItem eventKey="1"><i className="icon-user-plus"></i> My profile</MenuItem>
									<MenuItem divider />
									<MenuItem onClick={this.handleLogout}><i className="icon-switch2"></i> Logout</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
		)
	}
}
export default TopNavbar;