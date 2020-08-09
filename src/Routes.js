import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About.js";
import MovieListEditor from "./MovieListEditor";
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import {LoginProvider} from "./LoginContext"

const Routes = () => {
    return (
        <>
        <LoginProvider>
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
                <Route path="/Login">
                    <LoginForm />
                </Route>
            </Switch>
        </LoginProvider>
        </>
    );
};

export default Routes;