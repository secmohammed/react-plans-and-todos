import React from "react";
import ProjectSummary from "./ProjectSummary";
const ProjectList = ({ projects }) => {
	const mapProjects = projects.map(project => {
		return <ProjectSummary key={project.id} project={project} />;
	});

	return <div className="project-list section">{mapProjects}</div>;
};

export default ProjectList;
