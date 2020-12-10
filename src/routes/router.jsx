import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../pages/home";
import Blog from "../pages/blog";
import Registro from "../pages/registro";
import E404 from "../pages/e404";

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
            <Route path="/e404" exact>
                <E404 />
            </Route>
        </Switch>
        </BrowserRouter>


    )
}

export default Router;