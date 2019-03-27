import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";
import SignedOutLinks from "./SignedOutLinks";
class NavigationBar extends Component {
	checkForAuthenticationAndRender = () => {
		if(this.props.isAuthenticated)
			return <SignedInLinks />
		else 
			return <SignedOutLinks />
	}
	render() {
		return (
			<Navbar className="teal lighten-1">
				<div className="container">
					{this.checkForAuthenticationAndRender()}
					<NavItem href="/">Plans</NavItem>
				</div>
			</Navbar>
		);
	}
}
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
};
export default connect(mapStateToProps,{})(NavigationBar);
