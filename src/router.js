import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser";
import Header from "./components/Header";

//import characters from "./data/stubCharacters.json";

const Router = () => {
    //const characterList = characters.results;

    //const getCharacterById = (id) => characterList.find((character) => character.id === id);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>

                <Route exact path="*">
                    {/*<h1> Error 404: Not Found </h1>*/}
                    <div>
                        <Header></Header>
                        <Switch>
                            <Route exact path="/character/:id">
                                <DetailedUser></DetailedUser>
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
