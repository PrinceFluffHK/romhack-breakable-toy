import React from "react";

const ProjectTile = ({ projectName, regionName, generation }) => {
    return(
        <div className="callout">
            <h3>{projectName}</h3>
            <p>The {regionName} Region</p>
            <p>Generation {generation}</p>
        </div>
    )
}

export default ProjectTile