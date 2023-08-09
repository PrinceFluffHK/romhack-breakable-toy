import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => {
    return(
        <>
            <div>Hello from HomePage</div>
            <div>
                <Link to={"/search-projects"}>
                    Find Romhack Documentation
                </Link>
            </div>
            <div>
                <Link to={"/my-projects"}>
                    View My Projects
                </Link>
            </div>
        </>
    )
}

export default HomePage