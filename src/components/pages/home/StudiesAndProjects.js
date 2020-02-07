import React from "react";
import Container from "../../Layout/Container/Container.component";
// style={{backgroundColor:'#89DBDF'}}

const StudiesAndProjects = () => {
  return (
    <div className='container-fluid pt-5 pb-5 bg-dark text-light'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
        </div><h1 className='display-5 pt-3 pb-3'>Studies & Projects:</h1></div>
      <div className='container pt-3 pb-3'>
        <div className='row'>
          <div className='col-lg-3 mb-1'>
            <h5>Software Development</h5>
            <ul>
              <li>Weather Data Analyser with <span className='badge' style={{backgroundColor:'rgb(42,93,148)'}}>Python</span></li>
              <li>Android Applications with <span className='badge' style={{backgroundColor:'rgb(236,122,40)'}}>Kotlin</span></li>
              <li>Full-stack Web applications with <span className='badge' style={{backgroundColor:'rgb(84,210,249)', color:'rgb(30,33,39)'}}>React</span> and <span className='badge' style={{backgroundColor:'rgb(54,117,47)'}}>Node.js</span></li>
              <li>Small projects with pure <span className='badge' style={{backgroundColor:'rgb(244,219,26)', color:'#000'}}>JavaScript</span></li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Networking</h5>
            <ul>
              <li><span className={'badge'} style={{backgroundColor:'rgb(22,174,229)'}}>Cisco</span> routers and switches configuration</li>
              <li>Network configuration</li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Electronics & IoT</h5>
            <ul>
              <li>Home Climate Monitoring with <span className='badge' style={{backgroundColor:'rgb(182,0,58)'}}>Raspberry Pi</span> and <span className='badge' style={{backgroundColor:'rgb(42,93,148)'}}>Python</span></li>
              <li>Surveillance Camera Project with <span className='badge' style={{backgroundColor:'rgb(182,0,58)'}}>Raspberry Pi</span></li>
              <li> Small Christmas Lights project with <span className='badge' style={{backgroundColor:'rgb(17,134,139)'}}>Arduino</span></li>
            </ul>
          </div>
          <div className='col-lg-3 mb-1'>
            <h5>Computer Hardware</h5>
            <ul>
              <li>PC Building</li>
              <li> CPU Overclocking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesAndProjects;
