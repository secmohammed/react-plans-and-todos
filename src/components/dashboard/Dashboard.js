import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { getProjects } from "../../store/actions/projectActions";
import Spinner from "../Spinner";

class Dashboard extends Component {
	componentDidMount() {
		this.props.getProjects();
	}
	render() {
		const { projects } = this.props;
		console.log(this.props.isLoading);
		if (this.props.isLoading) {
			return (
				<div className="dashboard container">
					<div className="row">
						<div className="col s12 m6">
							<ProjectList projects={projects} />
						</div>
						<div className="col s12 m5 offset-m1">
							<Notifications />
						</div>
					</div>
				</div>
			);
		} else {
			return <Spinner />;
		}
	}
}
const mapStateToProps = state => {
	return {
		projects: state.project.projects,
		isLoading: state.loading.loading
	};
};
export default connect(
	mapStateToProps,
	{
		getProjects
	}
)(Dashboard);
