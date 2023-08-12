import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div className="">
            <div className="red-bg"></div>
            <div className="vl"></div>
            <div className="grid-x grid-margin-x ">
                <div className="cell auto ">
                    <h1 className="right-text">Romhack</h1>
                </div>
                <div className="cell auto">
                    <h1 className="left-text">Studio</h1>
                    <div className="">
                        <Link to={"/new-project"} className="button center-button">
                            New Project
                        </Link>
                    </div>
                    <div className="">
                        <Link to={"/search-projects"} className="button center-button">
                            Browse Romhacks
                        </Link>
                    </div>
                    <div>
                        <Link to={"/my-projects"} className="button center-button">
                            View My Projects
                        </Link>
                    </div>
                    <div>
                        <Link to={"/my-collabs"} className="button center-button">
                            View My Collaborations
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
