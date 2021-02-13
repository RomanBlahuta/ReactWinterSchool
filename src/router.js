import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import DetailedCharacter from './pages/DetailedCharacter';
import DetailedEpisode from './pages/DetailedEpisode/DetailedEpisode';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="*">
                    <Switch>
                        <Route exact path="/character/:id">
                            <DetailedCharacter />
                        </Route>
                        <Route exact path="/episode/:id">
                            <DetailedEpisode />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
