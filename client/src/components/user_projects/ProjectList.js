import React, { useEffect, useState } from "react";
import ProjectTile from "./ProjectTile";
import Project from "../../../../server/src/models/Project";

const ProjectList = props => {
    const [projects, setProjects] = useState([])

    const getUserProjects = async () => {
        try {
            const response = await Project.query()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getUserProjects()
    },[])

    return(
        <>Hello from ProjectList
            <ProjectTile/>
        </>
    )
}

export default ProjectList