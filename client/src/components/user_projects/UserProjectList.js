import React, { useEffect, useState } from "react";
import ProjectTile from "./ProjectTile.js";
import { Link } from "react-router-dom";

const UserProjectList = (props) => {
    const [projectList, setProjectList] = useState([]);

    const getProjects = async () => {
        try {
            const response = await fetch("/api/v1/projects");
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            setProjectList(responseBody.projects);
        } catch (error) {
            console.error(`getProjects error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    const projectsToRender = projectList.map((project) => {
        return (
            <Link
                key={project.id}
                to={`/projects/${project.id}/pokemon`}
                className="button project-list flex-left"
            >
                <ProjectTile
                    projectName={project.projectName}
                    regionName={project.regionName}
                    generation={project.generation}
                    creatorName={project.creatorName}
                />
            </Link>
        );
    });

    return (
        <div className="poke-grid-project-list">
            <div className="nav-pane-left">
                <h1>Filter</h1>
            </div>
            <div className="overflow-scroll">
                <h1>My Projects</h1>
                {projectsToRender}
            </div>
        </div>
    );
};

export default UserProjectList;
