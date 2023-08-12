import React, { useEffect, useState } from "react";
import ProjectTile from "./ProjectTile.js";

const UserProjectList = (props) => {
    const [projectList, setProjectList] = useState([])

    const getProjects = async () => {
        try {
            const response = await fetch("/api/v1/projects")
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            setProjectList(responseBody.projectsList)
        } catch (error) {
            console.error(`Error in Fetch: ${error.message}`);
        }
    }

    useEffect(() => {
        getProjects()
    },[])

    const projectsToRender = projectList.map((project) => {
        return(
            <ProjectTile 
                key={project.id}
            />
        )
    })

    return(
        <>
            <div>My Romhack Projects</div>
            <ul>{projectsToRender}</ul>
        </>
    )
}

export default UserProjectList