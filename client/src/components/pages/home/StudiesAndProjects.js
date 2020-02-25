import React from "react";
import {Link} from "react-router-dom";
import Container from "../../Layout/Container/Container.component";
import '../../Layout/Buttons/Button/Button.style.css';
import './StudiesAndProjects.style.css';
import '../../Layout/About.style.css'

const StudiesAndProjects = () => {
  return (
    <div className='container-fluid pt-5 pb-5' style={{backgroundColor:'#303030'}}>
      <div className='container'>
        <div className='d-flex justify-content-center'>
        </div><h1 className='display-5 pt-3 pb-3' style={{color:'#D6D6D6'}}>Studies & Projects:</h1></div>
      <div className='container pt-3 pb-3'>
        <Link to='/projects'>
          <button className='button button-dark background-dark project-button mb-3'>[my_projects]</button>
        </Link>
        <div className='row'>
          <div className='col-lg-4 mb-3'>
            <Container className={'CRK-container container-dark'}>
              <div className={'pb-2 pt-3 pr-2 pl-2'}>
              <h5 className={'text-center'} style={{color:'#d6d6d6'}}>Software Development</h5>
              <ul>
                <li>Weather Data Analyser with <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
                <li>Android Applications with <span className='badge' style={{backgroundColor:'rgb(236,122,40)',color:'#FFF'}}>Kotlin</span></li>
                <li>Full-stack Web applications with <span className='badge' style={{backgroundColor:'rgb(84,210,249)', color:'rgb(30,33,39)'}}>React</span> and <span className='badge' style={{backgroundColor:'rgb(54,117,47)',color:'#FFF'}}>Node.js</span></li>
                <li>Small projects with pure <span className='badge' style={{backgroundColor:'rgb(244,219,26)', color:'#000'}}>JavaScript</span></li>
              </ul>
              </div>
            </Container>
          </div>
          <div className='col-lg-4 mb-3'>
            <Container className={'CRK-container container-dark'}>
              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                <h5 className={'text-center'} style={{color:'#d6d6d6'}}>Networking</h5>
                <ul>
                  <li><span className={'badge'} style={{backgroundColor:'rgb(22,174,229)',color:'#FFF'}}>Cisco</span> routers and switches configuration</li>
                  <li>Network configuration</li>
                </ul>
              </div>
            </Container>
          </div>
          <div className='col-lg-4 mb-3'>
            <Container className={'CRK-container container-dark'}>
              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                <h5 className={'text-center'} style={{color:'#d6d6d6'}}>Electronics & IoT</h5>
                <ul>
                  <li>Home Climate Monitoring with <span className='badge' style={{backgroundColor:'rgb(182,0,58)', color:'#FFF'}}>Raspberry Pi</span> and <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
                  <li>Surveillance Camera Project with <span className='badge' style={{backgroundColor:'rgb(182,0,58)',color:'#FFF'}}>Raspberry Pi</span></li>
                  <li> Small Christmas Lights project with <span className='badge' style={{backgroundColor:'rgb(17,134,139)',color:'#FFF'}}>Arduino</span></li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {/*<div className='row'>*/}
      {/*  <div className='col-4'>*/}
      {/*    <div>*/}
      {/*      <div className={'text-center'}>*/}
      {/*        <h5 style={{color:'#ED2939'}}>[Software Development]</h5>*/}
      {/*        <ul style={{color:'#F0F0F0'}}>*/}
      {/*          <li style={{listStyle:'none'}}>Weather Data Analyser with [Python]</li>*/}
      {/*          <li style={{listStyle:'none'}}>Android Applications with [Kotlin]</li>*/}
      {/*          <li style={{listStyle:'none'}}>Full-stack Web applications with [React] and [Node.js]</li>*/}
      {/*          <li style={{listStyle:'none'}}>Small projects with [JavaScript]</li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={'col-md-4'}>*/}
      {/*    <div className={'container text-center'}>*/}
      {/*      <div style={{width:'100%', height:'100%', backgroundColor:'red'}}>*/}
      {/*        <div className={'square-top-right'}/>*/}
      {/*        <div className={'square-top-left'}/>*/}
      {/*      </div>*/}
      {/*      <div className={'container'} style={{width:'80%',height:'80%'}}>*/}
      {/*        <h5 style={{color:'#ED2939'}}>[Software Development]</h5>*/}
      {/*          <li style={{listStyle:'none',color:'#f0f0f0'}}>Weather Data Analyser with [Python]</li>*/}
      {/*          <li style={{listStyle:'none',color:'#f0f0f0'}}>Android Applications with [Kotlin]</li>*/}
      {/*          <li style={{listStyle:'none',color:'#f0f0f0'}}>Full-stack Web applications with [React] and [Node.js]</li>*/}
      {/*          <li style={{listStyle:'none',color:'#f0f0f0'}}>Small projects with [JavaScript]</li>*/}
      {/*      </div>*/}
      {/*      <div style={{width:'100%', backgroundColor:'blue'}}>*/}
      {/*        <div className={'square-bottom-right'}/>*/}
      {/*        <div className={'square-bottom-left'}/>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default StudiesAndProjects;
