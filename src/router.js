import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import DetailedCharacter from './pages/DetailedCharacter';
import DetailedEpisode from "./pages/DetailedEpisode/DetailedEpisode";
import React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>

                <Route exact path="*">
                        <Switch>
                            <Route exact path="/character/:id">
                                <DetailedCharacter></DetailedCharacter>
                            </Route>
                            <Route exact path="/episode/:id">
                                <DetailedEpisode></DetailedEpisode>
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
