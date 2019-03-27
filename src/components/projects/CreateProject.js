import React, { Component } from "react";
import { Col, Input, Icon, Button } from "react-materialize";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
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
export default connect(
	null,
	{
		createProject
	}
)(CreateProject);
