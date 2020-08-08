import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About.js";
import MovieListEditor from "./MovieListEditor";
import LoginForm from "./LoginForm";
import Navigation from './Navigation'

const Routes = () => {
    return (
        <>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/movielisteditor">
                    <MovieListEditor />
                </Route>
                <Route path="/loginform">
                    <LoginForm />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;