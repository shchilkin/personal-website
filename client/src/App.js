import React, { Fragment }                        from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home               from "./components/pages/home/Home";
import Login              from "./components/pages/authentication/Login";
import NotFound           from  './components/pages/NotFound.page';
import AppPage            from "./components/Layout/Page/AppPage.component";
import AuthState          from "./contexts/auth/AuthState";
import AlertState         from "./contexts/alert/AlertState";
import ThemeState         from './contexts/theme/ThemeState';
import ContactPage        from "./components/pages/contact/ContactPage";
import setAuthToken       from "./utils/setAuthToken";
import Registration       from "./components/pages/authentication/Registration";
import findOnGithub       from './components/pages/smallProjects/FindOnGithub/FindOnGithub.component';
import AvatarGenerator    from "./components/pages/avatarGenerator/AvatarGenerator";
import ProjectPlaceholder from "./components/pages/smallProjects/projectPlaceholder.component";
import Navbar from "./components/Layout/Navbar/Navbar.component";
import SoftUIGenerator from "./components/pages/SoftUIGenerator/SoftUIGenerator";

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  
  return (
      <AuthState>
        <ThemeState>
          <AlertState>
            <Router>
              <Fragment>
                <AppPage>
                  <Navbar/>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Contact' component={ContactPage} />
                    <Route exact path='/Register' component={Registration} />
                    <Route exact path='/projects' component={ProjectPlaceholder}/>
                    <Route exact path='/projects/findOnGithub' component={findOnGithub}/>
                    <Route exact path='/projects/AvatarGenerator' component={AvatarGenerator}/>
                    <Route exact path='/SoftUI-generator' component={SoftUIGenerator} />
                    <Route component={NotFound} />
                  </Switch>
                </AppPage>
              </Fragment>
            </Router>
          </AlertState>
        </ThemeState>
      </AuthState>
  );
};

export default App;