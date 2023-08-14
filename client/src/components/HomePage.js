import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div className="">
            <div className="red-bg"/>
            <div className="vl"/>
            <div className="grid-x grid-margin-x ">
                <div className="cell auto ">
                    <h1 className="right-text">Romhack</h1>
                    <img className="left-pane-image" src="https://preview.redd.it/gzv1pc4bvdyz.png?width=640&crop=smart&auto=webp&s=198383d05cff22edc432f9311ecd31b98d56761c"/>
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
