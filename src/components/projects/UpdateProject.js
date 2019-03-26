import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject, updateProect } from "../../store/actions/projectActions";
import { Col, Input, Icon, Button } from "react-materialize";
import Spinner from "../Spinner";

class UpdateProject extends Component {
	async componentDidMount() {
		await this.props.getProject(this.props.match.params.id);
	}
	constructor(props) {
		super(props);
		this.state = {
			title: props.project.title,
			content: props.project.content
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.updateProect(this.props.match.params.id, this.state);
	};
	render() {
		if (!this.props.isLoading) {
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
							<Button waves="light">Update Project</Button>
						</form>
					</Col>
				</div>
			);
		} else {
			return <Spinner />;
		}
	}
}

const mapStateToProps = state => {
	return {
		project: state.project,
		isLoading: state.loading.loading
	};
};

export default connect(
	mapStateToProps,
	{
		getProject,
		updateProect
	}
)(UpdateProject);
