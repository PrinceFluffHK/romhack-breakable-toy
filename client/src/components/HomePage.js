import React from "react";
import { Link } from "react-router-dom";
import NextSteps from "./NextSteps";

const HomePage = props => {
    console.log(props)
    
    let nextSteps 
    if (props.user) {
        nextSteps = (
            <Link to={view}>
                nextSteps
            </Link>
        )
    }

    return(
        <div>
            Hello from HomePage {props.user}
            <Link to={"/project-search"}>
                Find Romhack Documentation
            </Link>
            <Link to={"/projects"}>
                View Projects
            </Link>
            <NextSteps
                user={props.user}
            />
        </div>
    )
}

export default HomePage