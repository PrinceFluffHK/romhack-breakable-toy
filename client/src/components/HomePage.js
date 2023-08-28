import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div className="poke-grid">
            <div className="nav-pane-left">
                <h1 className="right-text">About Romhack Studio:</h1>
                <p style={{margin: "2rem 3rem"}}>
                    "Prince Fluff's Romhack Studio" (PFRS) is a combination passion-project and capstone project developed by me, Garrett "Prince Fluff" Tordo. 
                    Originally started as the capstone project for my coding bootcamp, I knew from the beginning that I wanted whatever I made to be imminently useful for both me and people like me. 
                    As a 
                </p>
            </div>
            <div className=" ">
                <h1 className="left-text">Where to?</h1>
                <div>
                    <Link to={"/new-project"} className="button flex-menu-item">
                        <h3>New Project</h3>
                    </Link>
                </div>
                <div>
                    <Link to={"/my-projects"} className="button flex-menu-item">
                        <h3>View My Projects</h3>
                    </Link>
                </div>
                <div>
                    <Link to={"/search-projects"} className="button flex-menu-item">
                        <h3>Browse Romhacks</h3>
                    </Link>
                </div>
                <div>
                    <Link to={"/my-collabs"} className="button flex-menu-item">
                        <h3>View My Collaborations</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
