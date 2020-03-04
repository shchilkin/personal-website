import React from "react";
import Container from "../../Layout/Container/Container.component";
import './StudiesAndProjects.style.css';
import '../../Layout/About.style.css'

const StudiesAndProjects = () => {

  return (
      <div className='container-fluid pt-5 pb-5'>
          <div className='container'>
              <div className='d-flex justify-content-center'>
            </div>
              <h1 className='display-5 pt-3 pb-3 header'>Studies <span style={{color:'#ED2939'}}>&</span> Projects</h1>
          </div>
          <div className={'container pt-3 pb-3'}>
              <div className={'row'}>
                  <div className={'col-md-6'}>
                      <h2 className={'header mb-3'}>Skills<span style={{color:'#ED2939'}}>:</span></h2>
                      <Container style={{paddingLeft:'1rem',paddingTop:'1rem', marginBottom:'1rem'}}>
                          <h4 className={'header mb-3'} style={{display:'inline-block'}}>Languages</h4>
                          <p>
                              <span className={'Badge'}>Kotlin</span>
                              <span className={'Badge'}>Python</span>
                              <span className={'Badge'}>JavaScript</span>
                      </p>
                          <h4 className={'header mb-3'}>Technologies</h4>
                          <p>
                              <span className={'Badge'}>React</span>
                              <span className={'Badge'}>Node.js</span>
                              <span className={'Badge'}>Docker</span>
                              <span className={'Badge'}>Raspberry Pi</span>
                              <span className={'Badge'}>Arduino</span>
                          </p>
                          <h4 className={'header mb-3'}>Other Skills</h4>
                          <p>
                              <span className={'Badge'}>Vector assets creation</span>
                              <span className={'Badge'}>Network configuration</span>
                         </p>
                      </Container>
                  </div>
                  <div className={'col-md-6'}>
                      <h2 className={'header mb-3'}>Projects<span style={{color:'#ED2939'}}>:</span> </h2>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Software Development</h5>
                                  <ul>
                                      <li>Weather Data Analyser with <span className='Badge-small'>Python</span></li>
                                      <li>Android Applications with <span className='Badge-small'>Kotlin</span></li>
                                      <li>Full-stack Web applications with <span className='Badge-small'>React</span> and <span className='Badge-small'>Node.js</span></li>
                                      <li>Small projects with pure <span className='Badge-small'>JavaScript</span></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Electronics & IoT</h5>
                                  <ul>
                                      <li>Home Climate Monitoring and Surveillance Camera Projects with <span className='Badge-small'>Raspberry Pi</span> and <span className='Badge-small'>Python</span></li>
                                      <li> Small Christmas Lights project with <span className='Badge-small'>Arduino</span></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default StudiesAndProjects;