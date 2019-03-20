import React, { Component } from "react";
import { Card, Col, Row, Preloader } from "react-materialize";
import { connect } from "react-redux";
import { getProject } from "../../store/actions/projectActions";
import Spinner from "../Spinner";

class ProjectDetails extends Component {
	async componentWillMount() {
		await this.props.getProject(this.props.match.params.id);
	}
	render() {
		if (this.props.project) {
			return (
				<div className="container section project-details">
					<Col m={6} s={12}>
						<Card
							className="teal lighten-3"
							textClassName="white-text"
							title={this.props.project.title}>
							{this.props.project.content}
						</Card>
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
		project: state.project.project
	};
};
export default connect(
	mapStateToProps,
	{
		getProject
	}
)(ProjectDetails);
