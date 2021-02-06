import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import DetailedCharacter from './pages/DetailedCharacter';
import Header from './components/Header';

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
                            <Redirect to="/" />
                        </Switch>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
