import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import NavbarContainer from './NavbarContainer';
import App from './App';
import User from './User';

const Router = () => {
    return (
        <BrowserRouter>
        <NavbarContainer />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Router;