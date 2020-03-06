import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Container from "../../Layout/Container/Container.component";
import Badge from "../../Layout/Badge/Badge.component";
import './StudiesAndProjects.style.css';
import '../../Layout/About.style.css'
import Button from "../../Layout/Buttons/Button/Button.component";
import {Link} from "react-router-dom";

const StudiesAndProjects = () => {

    // TODO Grab this data from DB
    const skills = {
        languages:['Kotlin', 'Python', 'JavaScript'],
        technologies:['React', 'Node.js', 'Docker', 'Raspberry Pi', 'Arduino'],
        otherSkills:['Vector assets creation','Network configuration']
    };

  return (
      <section id={'StudiesAndProjects'} className='container-fluid pt-5 pb-5'>
          <div className='container'>
              <div className='d-flex justify-content-center'>
            </div>
              <h1 className='display-5 pt-3 pb-3 header'>Studies <span style={{color:'#ED2939'}}>&</span> Projects</h1>
          </div>
          <div className={'container pt-3 pb-3'}>
              <div className={'row'}>
                  <div className={'col-md-6 mb-3'}>
                      <h2 className={'header mb-3'}>Skills<span style={{color:'#ED2939'}}>:</span></h2>
                      <Container style={{paddingLeft:'1rem',paddingTop:'1rem', marginBottom:'1rem'}}>
                          <h4 className={'header mb-3'} style={{display:'inline-block'}}>Languages</h4>
                          <p>
                              {skills.languages.map(
                                  language => <Badge
                                      key={uuidv4()}
                                      type={'normal'}
                                      className={'Language'}>{language}
                                  </Badge>
                              )}
                          </p>
                          <h4 className={'header mb-3'}>Technologies</h4>
                          <p>
                              {skills.technologies.map(
                                  technology => <Badge
                                      key={uuidv4()}
                                      type={'normal'}
                                      className={'Technology'}>{technology}
                                  </Badge>
                              )}
                          </p>
                          <h4 className={'header mb-3'}>Other Skills</h4>
                          <p>
                              {skills.otherSkills.map(
                                  otherSkill => <Badge
                                      key={uuidv4()}
                                      type={'normal'}
                                      className={'Skill'}>{otherSkill}
                                  </Badge>
                              )}
                          </p>
                      </Container>
                      <div>
                          <Link to='/projects/findOnGithub'>
                              <Button className={'project-button'} style={{marginRight:'.5rem'}}>Find on Github</Button>
                          </Link>
                          <Link to='/projects/AvatarGenerator'>
                              <Button className={'project-button'} >Avatar generator</Button>
                          </Link>
                      </div>
                  </div>
                  <div className={'col-md-6'}>
                      <h2 className={'header mb-3'}>Projects<span style={{color:'#ED2939'}}>:</span> </h2>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Software Development</h5>
                                  <ul>
                                      <li>Weather Data Analyser with <Badge  className={'Language'} type={'small'}>Python</Badge></li>
                                      <li>Android Applications with <Badge className={'Language'} type={'small'}>Kotlin</Badge></li>
                                      <li>Full-stack Web applications with <Badge className={'Technology'} type={'small'}>React</Badge> and <Badge className={'Technology'} type={'small'}>Node.js</Badge></li>
                                      <li>Small projects with pure <Badge className={'Language'} type={'small'}>JavaScript</Badge></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Electronics & IoT</h5>
                                  <ul>
                                      <li>Home Climate Monitoring and Surveillance Camera Projects with <Badge className={'Technology'} type={'small'}>Raspberry Pi</Badge> and <Badge className={'Language'} type={'small'}>Python</Badge></li>
                                      <li> Small Christmas Lights project with <Badge className={'Technology'} type={'small'}>Arduino</Badge></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default StudiesAndProjects;