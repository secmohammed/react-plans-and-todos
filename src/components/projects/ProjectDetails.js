import React, { Component } from "react";
import { Card, Col, Button } from "react-materialize";
import { connect } from "react-redux";
import { getProject, removeProject } from "../../store/actions/projectActions";
import Spinner from "../Spinner";
class ProjectDetails extends Component {
	async componentWillMount() {
		await this.props.getProject(this.props.match.params.id);
	}
	deleteProject(event) {
		event.preventDefault();
		this.props.removeProject(this.props.project.id);
		this.props.history.push("/");
	}
	render() {
		if (this.props.project && !this.props.isLoading) {
			return (
				<div className="container section project-details">
					<Col m={6} s={12}>
						<Card
							className="teal lighten-3"
							textClassName="white-text"
							title={this.props.project.title}
							actions={[
								<Button
									className="red"
									waves="light"
									onClick={this.deleteProject.bind(this)}>
									Delete
								</Button>
							]}>
							{this.props.project.content}
						</Card>
					</Col>
				</div>
			);
		} else {
			return (
				<Spinner />
			);
		}
	}
}
const mapStateToProps = state => {
	return {
		project: state.project.project,
		isLoading: state.loading.loading,
	};
};
export default connect(
	mapStateToProps,
	{
		getProject,
		removeProject
	}
)(ProjectDetails);
