import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
        </Switch>
    )
}

export default Routes;