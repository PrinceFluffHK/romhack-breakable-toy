import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => {
    console.log(props)

    return(
        <div>
            Hello from HomePage {props.user}
            <Link to={"/project-search"}>
                Find Romhack Documentation
            </Link>
            <Link to={"/projects"}>
                View My Projects
            </Link>
        </div>
    )
}

export default HomePage