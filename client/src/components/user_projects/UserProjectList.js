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
            // console.log(responseBody.projects)
            setProjectList(responseBody.projects);
        } catch (error) {
            console.error(`Error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    const projectsToRender = projectList.map((project) => {
        return (
            <Link key={project.id} to={`/my-projects/${project.id}/pokemon`}>
                <ProjectTile
                    projectName={project.projectName}
                    regionName={project.regionName}
                    generation={project.generation}
                />
            </Link>
        );
    });

    return (
        <div>
            <div className="red-bg" />
            <div className="vl" />
            <div className="grid-x grid-margin-x ">
                <div className="cell auto " />
                <div className="cell auto">
                    <h1>My Projects</h1>
                    {projectsToRender}
                </div>
            </div>
        </div>
    );
};

export default UserProjectList;
