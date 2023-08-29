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
            <div key={project.id} className="container-project-cell cell small-12 medium-6">
                <Link
                    to={`/projects/${project.id}/pokemon`}
                    className="button"
                    
                >
                    <ProjectTile
                        projectName={project.projectName}
                        regionName={project.regionName}
                        generation={project.generation}
                        creatorName={project.creatorName}
                        projectId={project.id}
                    />
                </Link>
            </div>
        );
    });

    return (
        <div className="poke-grid-project-list">
            <div className="nav-pane-left">
                <h1>Filter</h1>
            </div>
            <div className="overflow-scroll">
                <div className="flex-center-vertical">
                    <h1>My Projects</h1>
                    <div className="container-project">
                        <Link to="new-project" className=" button">
                            <h3>Create New Project</h3>
                        </Link>
                    </div>
                    <div className="grid-x">{projectsToRender}</div>
                </div>
            </div>
        </div>
    );
};

export default UserProjectList;
