import React, {Fragment} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import FindOnGithub from "./FindOnGithub/FindOnGithub.component";
import ProjectPlaceholder from "./projectPlaceholder.component";

const SmallProjects = () => {
  return (
      <Router>
          <Fragment>
              <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{backgroundColor:'#ffe760'}}>
                  <Link
                      to='/Projects'
                      className='navbar-brand mb-0 h1'
                  >
                      Small Projects <span className='badge badge-danger'>TODO </span>
                  </Link>
                  <button
                      className='navbar-toggler'
                      type='button'
                      data-toggle='collapse'
                      data-target='#navbarNavAltMarkup'
                      aria-controls='navbarNavAltMarkup'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                  >
                      <span className='navbar-toggler-icon'/>
                  </button>
                  <div className='navbar-collapse collapse' id='navbarNavAltMarkup'>
                      <ul className='navbar-nav mr-auto'>
                          <Link className='nav-item nav-link' to='/projects/findOnGithub'>
                              Find On GitHub
                          </Link>
                      </ul>
                  </div>
              </nav>
              <div className='container-fluid pt-3 pb-3'>
                      <Switch>
                          <Route exact path='/Projects' component={ProjectPlaceholder}/>
                          <Route exact path='/Projects/findOnGithub' component={FindOnGithub}/>
                      </Switch>
              </div>
          </Fragment>
      </Router>
  );
};

export default SmallProjects;
