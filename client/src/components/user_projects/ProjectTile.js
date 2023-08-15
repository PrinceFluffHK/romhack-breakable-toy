import React from "react";

const ProjectTile = ({ projectName, regionName, generation, creatorName }) => {
    return (
        <div className="margins">
            <h3>{projectName}</h3>
            <p>
                The {regionName} Region | Generation {generation} | Created by: {creatorName}
            </p>
        </div>
    );
};

export default ProjectTile;
