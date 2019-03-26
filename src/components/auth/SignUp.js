import React, { Component } from "react";
import { Col, Input, Icon, Button } from "react-materialize";
import { clearNotification } from "../../store/actions/notificationActions";
import { register } from "../../store/actions/authActions.js";
import { connect } from 'react-redux';
class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			first_name: "",
			last_name: ""
		};
	}
	componentDidUpdate() {
		if (this.props.message) {
			this.props.history.push('/login')
			this.props.clearNotification();

		}
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.register(this.state);
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
							onChange={this.handleChange}>
							<Icon>account_circle</Icon>
						</Input>
						<Input
							name="first_name"
							label="first name"
							validate
							onChange={this.handleChange}>
							<Icon>account_circle</Icon>
						</Input>
						<Input
							name="last_name"
							label="last name"
							validate
							onChange={this.handleChange}>
							<Icon>account_circle</Icon>
						</Input>

						<Input
							name="password"
							label="password"
							validate
							type="password"
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
		message: state.notification.message
	};
};
export default connect(
	mapStateToProps,
	{
		register,
		clearNotification
	}
)(SignUp);

