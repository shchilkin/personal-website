import React, { Fragment }                        from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home               from "./components/pages/home/Home";
import Login              from "./components/pages/authentication/Login";
import AuthState          from "./context/auth/AuthState";
import ThemeState         from './context/theme/ThemeState'
import ContactPage        from "./components/pages/contact/ContactPage";
import Registration       from "./components/pages/authentication/Registration";
import findOnGithub       from './components/pages/smallProjects/FindOnGithub/FindOnGithub.component';
import AvatarGenerator    from "./components/pages/avatarGenerator/AvatarGenerator";
import ProjectPlaceholder from "./components/pages/smallProjects/projectPlaceholder.component";
import NotFound from  './components/pages/NotFound.page';
import Navbar from "./components/Navbar";
import App_page from "./components/Layout/Page/App_page.component";

const App = () => {
  return (
    <AuthState>
      <ThemeState>
        <Router>
          <Navbar/>
          <Fragment>
            <App_page>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Contact' component={ContactPage} />
                <Route exact path='/Register' component={Registration} />
                <Route exact path='/projects' component={ProjectPlaceholder}/>
                <Route exact path='/projects/findOnGithub' component={findOnGithub}/>
                <Route exact path='/projects/AvatarGenerator' component={AvatarGenerator}/>
                <Route component={NotFound} />
              </Switch>
            </App_page>
          </Fragment>
        </Router>
      </ThemeState>
    </AuthState>
  );
};

export default App;