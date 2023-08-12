import React from "react";
import { Link } from "react-router-dom";

const HomePage = props => {

    return(
        <div className="container">
            <h1 className="center-text ">Welcome to Romhack Studio</h1>
            <div className="container__row">
                <div className="container__col-md-5 container__col-offset-7">
                    <div className="">
                        <button type="text" className="">
                            <Link to={"/search-projects"}>
                                Browse Romhacks
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button type="text">
                            <Link to={"/my-projects"}>
                                View My Projects
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button type="text">
                            <Link to={"/my-collabs"}>
                                View My Collaborations
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage