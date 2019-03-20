import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
export default class NavigationBar extends Component {
	render() {
		return (
			<Navbar className="teal lighten-1">
				<div className="container">
					<SignedInLinks />
					<SignedOutLinks />
					<NavItem href="/">Plans</NavItem>
				</div>
			</Navbar>
		);
	}
}
