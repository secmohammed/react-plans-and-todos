import React, { Component } from "react";
import { Col, Input, Icon, Button } from "react-materialize";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions.js";
import { clearNotification } from "../../store/actions/notificationActions";
// show notification, redirect if user is authenticated.
class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}
	componentDidUpdate() {
		if (this.props.isAuthenticated) {
			this.props.history.push('/')
		}
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.login(this.state)
	};
	render() {
		return (
			<div className="container">
				<Col>
					<form onSubmit={this.handleSubmit}>
						<Input
							name="email"
							label="email"
							validate
							labelClassName="white-text"
							onChange={this.handleChange}>
							<Icon>account_circle</Icon>
						</Input>
						<Input
							name="password"
							label="password"
							validate
							type="password"
							labelClassName="white-text"
							onChange={this.handleChange}>
							<Icon>lock</Icon>
						</Input>
						<Button waves="light">Login</Button>
					</form>
				</Col>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		message: state.notification.message
	};
};
export default connect(
	mapStateToProps,
	{
		login,
		clearNotification
	}
)(SignIn);
