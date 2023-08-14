import React from "react";

const ProjectTile = ({ projectName, regionName, generation, creatorName }) => {
    return(
        <div className="callout">
            <div className="grid-x grid-margin-x">
                <div className="cell medium-8 large-8">
                    <h3>{projectName}</h3>
                    <p>Created by: {creatorName}</p>
                </div>
                <div className="cell auto">
                    <p>Gen {generation}: {regionName}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectTile