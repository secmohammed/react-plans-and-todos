import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class SignedInLinks extends Component {
	render() {
		return (
			<ul className="right">
				<li>
					<NavLink to="/project/create">Create Project</NavLink>
				</li>
				<li>
					<NavLink to="/auth/login">Logout</NavLink>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating pink lighten-1">
						Profile
					</NavLink>
				</li>
			</ul>
		);
	}
}
