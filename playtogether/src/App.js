import './App.css';
import {
        BrowserRouter as Router,
        Switch,
        Route

} from "react-router-dom";
import LoginPage from "./views/Login/LoginPage/LoginPage";
import DashboardPage from "./views/Dashboard/DashboardPage/DashboardPage";
function App() {
    return (
        <Router>
                <Switch>
                        <Route path="/login">
                                <LoginPage/>
                        </Route>
                        <Route path="/dashboard">
                            <DashboardPage/>
                        </Route>
                </Switch>
        </Router>
    );
}

export default App;
