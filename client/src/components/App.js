import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import HomePage from "./HomePage";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import UserProjectList from "./user_projects/UserProjectList";
import ProjectForm from "./user_projects/ProjectForm";
import PokemonPage from "./pokemon/PokemonPage";
import ViewerProjectList from "./viewer_projects/ViewerProjectList";

const App = (props) => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [projectId, setProjectId] = useState(null);

    const fetchCurrentUser = async () => {
        try {
            const user = await getCurrentUser();
            setCurrentUser(user);
        } catch (err) {
            setCurrentUser(null);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <Router>
            <TopBar user={currentUser} />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => <HomePage user={currentUser} {...props} />}
                />
                <Route exact path="/users/new" component={RegistrationForm} />
                <Route exact path="/user-sessions/new" component={SignInForm} />
                <Route
                    exact
                    path="/search-projects"
                    component={ViewerProjectList}
                    setProjectId={setProjectId}
                />
                <AuthenticatedRoute
                    exact={true}
                    path="/projects/:id/pokemon"
                    component={PokemonPage}
                    user={currentUser}
                    setProjectId={setProjectId}
                    projectId={projectId}
                />
                <AuthenticatedRoute
                    exact={true}
                    path="/new-project"
                    component={ProjectForm}
                    user={currentUser}
                />
                <AuthenticatedRoute
                    exact={true}
                    path="/my-projects"
                    component={UserProjectList}
                    user={currentUser}
                    setProjectId={setProjectId}
                />
            </Switch>
        </Router>
    );
};

export default hot(App);
