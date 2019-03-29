import React, { Component } from "react";
import { Col, Input, Icon, Button } from "react-materialize";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { setNotification } from '../../store/actions/notificationActions'
class CreateProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			content: ""
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createProject(this.state);
	};
	componentWillMount() {
	  if(!this.props.isAuthenticated) {
	  	this.props.history.push('/auth/login');
        this.props.setNotification({
            message: 'You have to login first',
            type: 'warning'
        })

	  }
	}
	render() {
		return (
			<div className="container">
				<Col>
					<form onSubmit={this.handleSubmit}>
						<Input name="title" label="title" onChange={this.handleChange}>
							<Icon>account_circle</Icon>
						</Input>
						<Input
							name="content"
							label="Content"
							validate
							type="textarea"
							onChange={this.handleChange}>
							<Icon>account_circle</Icon>
						</Input>
						<Button waves="light">Create</Button>
					</form>
				</Col>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	}
}
export default connect(
	mapStateToProps,
	{
		createProject,
		setNotification
	}
)(CreateProject);
