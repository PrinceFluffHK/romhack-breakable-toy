import React from "react";

const ProjectTile = ({ projectName, regionName, generation, creatorName, setProjectId, projectId }) => {
    const setProject = () => {
        setProjectId(projectId)
    }

    return (
        <div className="margins" onClick={setProject}>
            <h3>{projectName}</h3>
            <p>
                The {regionName} Region | Generation {generation} | Created by: {creatorName}
            </p>
        </div>
    );
};

export default ProjectTile;
