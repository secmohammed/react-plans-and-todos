import React, { Component } from "react";
import { Card, Col, Button } from "react-materialize";
import { ToastsStore, ToastsContainer } from "react-toasts";
import { connect } from "react-redux";
import { getProject, removeProject } from "../../store/actions/projectActions";
import Spinner from "../Spinner";
import { clearNotification } from "../../store/actions/notificationActions";
class ProjectDetails extends Component {
	async componentWillMount() {
		await this.props.getProject(this.props.match.params.id);
	}
	componentDidUpdate() {
		if (this.props.message) {
			ToastsStore.success(this.props.message);
			this.props.clearNotification();
		}
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
					<ToastsContainer store={ToastsStore} />
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
				<div>
					<Spinner />
					<ToastsContainer store={ToastsStore} />
				</div>
			);
		}
	}
}
const mapStateToProps = state => {
	return {
		project: state.project.project,
		isLoading: state.loading.loading,
		message: state.notification.message
	};
};
export default connect(
	mapStateToProps,
	{
		getProject,
		removeProject,
		clearNotification
	}
)(ProjectDetails);
