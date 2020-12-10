import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../pages/home";
import Blog from "../pages/blog";
import Registro from "../pages/registro";

function Router(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />      
            </Route>
            <Route path="/blog" exact>
                <Blog />
            </Route>
            <Route path="/registro" exact>
                <Registro />
            </Route>
        </Switch>
        </BrowserRouter>


    )
}

export default Router;