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
                              <span className={'Badge'}
                                  style={{
                                        backgroundImage:'linear-gradient(#f3722e, #f48043)',
                                        color:"white",
                                  }}>Kotlin</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#2a5d94,#3f6d9f)',
                                        color:'white',
                                    }}>Python</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage: 'linear-gradient(#F4DB26,#f5df3c)',
                                        color:'black'
                                    }}>JavaScript</span>
                      </p>
                          <h4 className={'header mb-3'}>Technologies</h4>
                          <p>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#54d2f9, #65d7fa)',
                                        color:"#1E2127",
                                    }}>React</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#36752f,#4a8344)',
                                        color:'white',
                                    }}>Node.js</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#107cdb,#2889df)',
                                        color:'white',
                                    }}>Docker</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#b6003a,#bd1a4e)',
                                        color:'white',
                                    }}>Raspberry Pi</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#11868b,#299297)',
                                        color:'white',
                                    }}>Arduino</span>
                          </p>
                          <h4 className={'header mb-3'}>Other Skills</h4>
                          <p>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#de3163, #e14673)',
                                        color:"white",
                                    }}>Vector assets creation</span>
                              <span className={'Badge'}
                                    style={{
                                        backgroundImage:'linear-gradient(#006d8f, #1a7c9a)',
                                        color:"white",
                                    }}>Network configuration</span>
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
                                      <li>Weather Data Analyser with <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
                                      <li>Android Applications with <span className='badge' style={{backgroundColor:'rgb(236,122,40)',color:'#FFF'}}>Kotlin</span></li>
                                      <li>Full-stack Web applications with <span className='badge' style={{backgroundColor:'rgb(84,210,249)', color:'rgb(30,33,39)'}}>React</span> and <span className='badge' style={{backgroundColor:'rgb(54,117,47)',color:'#FFF'}}>Node.js</span></li>
                                      <li>Small projects with pure <span className='badge' style={{backgroundColor:'rgb(244,219,26)', color:'#000'}}>JavaScript</span></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Electronics & IoT</h5>
                                  <ul>
                                      <li>Home Climate Monitoring and Surveillance Camera Projects with <span className='badge' style={{backgroundColor:'rgb(182,0,58)', color:'#FFF'}}>Raspberry Pi</span> and <span className='badge' style={{backgroundColor:'rgb(42,93,148)',color:'#FFF'}}>Python</span></li>
                                      <li> Small Christmas Lights project with <span className='badge' style={{backgroundColor:'rgb(17,134,139)',color:'#FFF'}}>Arduino</span></li>
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