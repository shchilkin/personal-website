import React, {Fragment} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import FindOnGithub from "./FindOnGithub/FindOnGithub.component";
import ProjectPlaceholder from "./projectPlaceholder.component";


const SmallProjects = () => {
  return (
      <Router>
          <Fragment>
              <div className='container-fluid pt-3 pb-3'>
                      <Switch>
                          <Route exact path='/projects' component={ProjectPlaceholder}/>
                          <Route exact path='/projects/findOnGithub' component={FindOnGithub}/>
                      </Switch>
              </div>
          </Fragment>
      </Router>
  );
};

export default SmallProjects;
