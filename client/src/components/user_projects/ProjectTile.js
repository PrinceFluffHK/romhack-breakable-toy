import React from "react";

const ProjectTile = ({ projectName, regionName, generation, creatorName }) => {
    return(
        <div className="">
            <div>
                <h3>{projectName}</h3>
            </div>
            <div>
                <p>The {regionName} Region: Generation {generation}</p>
            </div>
        </div>
    )
}

export default ProjectTile