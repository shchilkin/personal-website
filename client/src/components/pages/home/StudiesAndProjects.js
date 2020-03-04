import React from "react";
import Container from "../../Layout/Container/Container.component";
import Badge from "../../Layout/Badge/Badge.component";
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
                              <Badge type={'normal'} className={'Badge'}>Kotlin</Badge>
                              <Badge type={'normal'} className={'Badge'}>Python</Badge>
                              <Badge type={'normal'} className={'Badge'}>JavaScript</Badge>
                      </p>
                          <h4 className={'header mb-3'}>Technologies</h4>
                          <p>
                              <Badge type={'normal'} className={'Badge'}>React</Badge>
                              <Badge type={'normal'} className={'Badge'}>Node.js</Badge>
                              <Badge type={'normal'} className={'Badge'}>Docker</Badge>
                              <Badge type={'normal'} className={'Badge'}>Raspberry Pi</Badge>
                              <Badge type={'normal'} className={'Badge'}>Arduino</Badge>
                          </p>
                          <h4 className={'header mb-3'}>Other Skills</h4>
                          <p>
                              <Badge type={'normal'} className={'Badge'}>Vector assets creation</Badge>
                              <Badge type={'normal'} className={'Badge'}>Network configuration</Badge>
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
                                      <li>Weather Data Analyser with <Badge type={'small'}>Python</Badge></li>
                                      <li>Android Applications with <Badge type={'small'}>Kotlin</Badge></li>
                                      <li>Full-stack Web applications with <Badge type={'small'}>React</Badge> and <Badge type={'small'}>Node.js</Badge></li>
                                      <li>Small projects with pure <Badge type={'small'}>JavaScript</Badge></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Electronics & IoT</h5>
                                  <ul>
                                      <li>Home Climate Monitoring and Surveillance Camera Projects with <Badge type={'small'}>Raspberry Pi</Badge> and <Badge type={'small'}>Python</Badge></li>
                                      <li> Small Christmas Lights project with <Badge type={'small'}>Arduino</Badge></li>
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