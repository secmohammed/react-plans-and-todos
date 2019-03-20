import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject, updateProect } from "../../store/actions/projectActions";
import { Col, Input, Icon, Button } from "react-materialize";

class UpdateProject extends Component {
	componentDidMount() {
		console.log(this.props.match.params.id);
		console.log(this.props.getProject(this.props.match.params.id));
	}
	constructor(props) {
		console.log(props);
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
		this.props.updateProect(this.state);
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
						<Button waves="light">Update Project</Button>
					</form>
				</Col>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		project: state.project
	};
};

export default connect(
	mapStateToProps,
	{
		getProject,
		updateProect
	}
)(UpdateProject);
