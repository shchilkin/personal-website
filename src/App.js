import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import SmallProjects from "./components/pages/SmallProjects";

function App() {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Projects' component={SmallProjects} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
