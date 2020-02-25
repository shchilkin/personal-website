import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/authentication/Login";
import Registration from "./components/pages/authentication/Registration";
import ContactPage from "./components/pages/contact/ContactPage";
import AvatarGenerator from "./components/pages/avatarGenerator/AvatarGenerator";
import findOnGithub from './components/pages/smallProjects/FindOnGithub/FindOnGithub.component'
import AuthState from "./context/auth/AuthState";
import ProjectPlaceholder from "./components/pages/smallProjects/projectPlaceholder.component";

function App() {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Contact' component={ContactPage} />
              <Route exact path='/Register' component={Registration} />
              <Route exact path='/projects' component={ProjectPlaceholder}/>
              <Route exact path='/projects/findOnGithub' component={findOnGithub}/>
              <Route exact path='/projects/AvatarGenerator' component={AvatarGenerator}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;