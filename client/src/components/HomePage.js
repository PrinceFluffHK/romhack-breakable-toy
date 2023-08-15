import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div className="poke-grid">
            <div className="left-nav-fill">
                <h1 className="right-text">Prince Fluff's</h1>
                <img
                    className="left-pane-image"
                    src="https://preview.redd.it/gzv1pc4bvdyz.png?width=640&crop=smart&auto=webp&s=198383d05cff22edc432f9311ecd31b98d56761c"
                />
            </div>
            <div className=" ">
                <h1 className="left-text">Romhack Studio</h1>
                <div>
                    <Link to={"/new-project"} className="button flex-center">
                        <h3>New Project</h3>
                    </Link>
                </div>
                <div>
                    <Link to={"/my-projects"} className="button flex-center">
                        <h3>View My Projects</h3>
                    </Link>
                </div>
                <div>
                    <Link to={"/search-projects"} className="button flex-center">
                        <h3>Browse Romhacks</h3>
                    </Link>
                </div>
                <div>
                    <Link to={"/my-collabs"} className="button flex-center">
                        <h3>View My Collaborations</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
