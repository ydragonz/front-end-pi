import { Switch, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route path="/dashboard">
                <DashboardPage/>
            </Route>
        </Switch>

    )
}

export default Routes;