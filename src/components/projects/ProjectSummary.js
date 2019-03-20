import React from "react";
import { Row, Col, CardPanel } from "react-materialize";

const ProjectSummary = ({ project }) => {
	return (
		<Row>
			<Col s={12} m={6}>
				<CardPanel className="teal lighten-4 black-text">
					<span>{project.title}</span>
					<p>{project.content}</p>
				</CardPanel>
			</Col>
		</Row>
	);
};
export default ProjectSummary;
