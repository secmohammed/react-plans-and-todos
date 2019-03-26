import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions.js'
export class SignedInLinks extends Component {
	render() {
		return (
			<ul className="right">
				<li>
					<NavLink to="/project/create">Create Project</NavLink>
				</li>
				<li>
					<NavLink to="#" onClick={this.props.logout.bind(this)}>Logout</NavLink>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating pink lighten-1">
						<img src={this.props.user.profile_picture} alt="User's profile" />
					</NavLink>
				</li>
			</ul>
		);
	}
}
const mapStateToProps = state => {
	return {
	    user: state.auth.user
	}
}
export default connect(mapStateToProps,{
	logout
})(SignedInLinks);
