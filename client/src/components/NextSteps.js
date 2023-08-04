import React from "react";
import { Link } from "react-router-dom";

const NextSteps = props => {
if(props.user) {
    return(
        <Link to={"/projects"}>
            View My Projects
        </Link>
    )
} else {
    return <></>
}
}

export default NextSteps