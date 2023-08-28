import React from "react";

const EditTopBar = ({ setEditing, setEditTab }) => {

    return(
        <div className="grid-x edit-top-bar">
            <h4 className="cell small-1 button " onClick={() => {setEditing(false)}}>
                Quit
            </h4>
            <h4 className="cell auto button" onClick={() => {setEditTab("stats")}}>
                Stats
            </h4>
            <h4 className="cell auto button" onClick={() => {setEditTab("moves")}}>
                Moves
            </h4>
        </div>
    )
}

export default EditTopBar