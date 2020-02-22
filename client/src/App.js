import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/authentication/Login";
import Registration from "./components/pages/authentication/Registration";
import ContactPage from "./components/pages/contact/ContactPage";
import SmallProjects from "./components/pages/smallProjects/SmallProjects";
import AvatarGenerator from "./components/pages/avatarGenerator/AvatarGenerator";
import ColorPalette from './components/pages/ColorPalette'
import findOnGithub from './components/pages/smallProjects/FindOnGithub/FindOnGithub.component'
import AuthState from "./context/auth/AuthState";

// style={{ backgroundColor: "rgb(251	,239	,129)" }} cool yellow color
// #ff0138 cool red color
// style={{background:'#F0F0F0', position:'relative', minHeight:'100vh'}}
function App() {
  return (
      <AuthState>
        <Router>
          <Fragment>
            <Navbar />
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={SmallProjects} />
                <Route exact path='/ColorPalette' component={ColorPalette}/>
                <Route exact path='/AvatarGenerator' component={AvatarGenerator}/>
                <Route exact path='/projects/findOnGithub' component={findOnGithub}/>
                <Route exact path='/Contact' component={ContactPage} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Registration} />
              </Switch>
            </div>
            {/*<Footer />*/}
          </Fragment>
        </Router>
      </AuthState>
  );
}

export default App;