import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Container from "../../Layout/Container/Container.component";
import Badge from "../../Layout/Badge/Badge.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import {Link} from "react-router-dom";
import Icons from "../../Icons";
import LanguageIcon from "./ProgrammingLanguageIcon/LanguageIcon.Component";

const StudiesAndProjects = () => {

    // TODO Grab this data from DB
    const skills = {
        languages:['Kotlin', 'Python', 'JavaScript','C#'],
        technologies:['React', 'Node.js', 'Docker', 'Raspberry Pi', 'Arduino', 'MongoDB','Linux/UNIX',"Git",'Bootstrap'],
        otherSkills:['Vector assets creation','Network configuration', 'Adobe Illustrator']
    };

  return (
      <section id={'StudiesAndProjects'} className='container-fluid pt-5 pb-5'>
              <div className='container'>
                  <h1 className='display-5 pt-5 pb-3 header'>Studies <span style={{color:'#ED2939'}}>&</span> Projects</h1>
                  <p className={'text'}>
                      {/*//TODO Add description*/}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, nibh id facilisis
                  consectetur, lacus libero tincidunt tellus, quis gravida dolor magna dapibus ligula. Maecenas faucibus
                  purus non libero condimentum consectetur. Quisque suscipit faucibus sem, id bibendum mi mollis at.
                 </p>
              </div>
          <div className={'container pt-3 pb-3'}>
              <div className={'row'}>
                  <div className={'col-md-6 mb-3'}>
                      <h2 className={'header mb-3'}>Skills<span style={{color:'#ED2939'}}>:</span></h2>
                      {/*<Container style={{paddingLeft:'1rem',paddingTop:'1rem', marginBottom:'1rem'}}>*/}
                      {/*    <h5 className={'header mb-3'} style={{display:'inline-block'}}>Languages</h5>*/}
                      {/*    <p>*/}
                      {/*        {skills.languages.map(*/}
                      {/*            language => <Badge*/}
                      {/*                key={uuidv4()}*/}
                      {/*                type={'normal'}*/}
                      {/*                className={'Yellow'}>{language}*/}
                      {/*            </Badge>*/}
                      {/*        )}*/}
                      {/*    </p>*/}
                      {/*    <h5 className={'header mb-3'}>Technologies</h5>*/}
                      {/*    <p>*/}
                      {/*        {skills.technologies.map(*/}
                      {/*            technology => <Badge*/}
                      {/*                key={uuidv4()}*/}
                      {/*                type={'normal'}*/}
                      {/*                className={'Green'}>{technology}*/}
                      {/*            </Badge>*/}
                      {/*        )}*/}
                      {/*    </p>*/}
                      {/*    <h5 className={'header mb-3'}>Other Skills</h5>*/}
                      {/*    <p>*/}
                      {/*        {skills.otherSkills.map(*/}
                      {/*            otherSkill => <Badge*/}
                      {/*                key={uuidv4()}*/}
                      {/*                type={'normal'}*/}
                      {/*                className={'Cyan'}>{otherSkill}*/}
                      {/*            </Badge>*/}
                      {/*        )}*/}
                      {/*    </p>*/}
                      {/*</Container>*/}
                      <Container style={{paddingLeft:'1rem',paddingTop:'1rem', marginBottom:'1rem'}}>
                          <h5 className={'header mb-3'} style={{display:'inline-block'}}>Languages</h5>
                          <p>
                              {skills.languages.map(
                                  language => <Badge
                                      key={uuidv4()}
                                      type={'normal'}
                                      className={'Yellow text-center'}>
                                      {Icons[language] && LanguageIcon(language)} {language}
                                  </Badge>
                              )}
                          </p>
                      </Container>
                      <Container style={{paddingLeft:'1rem',paddingTop:'1rem', marginBottom:'1rem'}}>
                          <h5 className={'header mb-3'}>Technologies</h5>
                          <p>
                              {skills.technologies.map(
                                  technology => <Badge
                                      key={uuidv4()}
                                      type={'normal'}
                                      className={'Green'}>
                                      {Icons[technology] && LanguageIcon(technology)} {technology}
                                  </Badge>
                              )}
                          </p>
                      </Container>
                      <Container style={{paddingLeft:'1rem',paddingTop:'1rem', marginBottom:'1rem'}}>
                          <h5 className={'header mb-3'}>Other Skills</h5>
                          <p>
                              {skills.otherSkills.map(
                                  otherSkill => <Badge
                                      key={uuidv4()}
                                      type={'normal'}
                                      className={'Cyan'}>{otherSkill}
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
                                      <li>Weather Data Analyser with <Badge  className={'Yellow'} type={'small'}>Python</Badge></li>
                                      <li>Android Applications with <Badge className={'Yellow'} type={'small'}>Kotlin</Badge></li>
                                      <li>Full-stack Web applications with <Badge className={'Green'} type={'small'}>React</Badge> and <Badge className={'Green'} type={'small'}>Node.js</Badge></li>
                                      <li>Small projects with pure <Badge className={'Yellow'} type={'small'}>JavaScript</Badge></li>
                                  </ul>
                              </div>
                          </Container>
                      </div>
                      <div className={'mb-4'}>
                          <Container>
                              <div className={'pb-2 pt-3 pr-2 pl-2'}>
                                  <h5 className={'text-center header'}>Electronics & IoT</h5>
                                  <ul>
                                      <li>Home Climate Monitoring and Surveillance Camera Projects with
                                          <Badge className={'Green'} type={'small'}>Raspberry Pi</Badge>
                                          and <Badge className={'Yellow'} type={'small'}>Python</Badge></li>
                                      <li> Small Christmas Lights project with <Badge className={'Green'} type={'small'}>Arduino</Badge></li>
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