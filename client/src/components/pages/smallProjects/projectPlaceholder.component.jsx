import React from "react";
import {Link} from "react-router-dom";
import Container from "../../Layout/Container/Container.component";
import FindOnGithubLogo from './FindOnGithub/FindOnGithubLogo.svg';
import '../../Layout/Buttons/Button/Button.style.css'
import Page from "../../Layout/Page/Page.component";
import Button from "../../Layout/Buttons/Button/Button.component";

const ProjectPlaceholder = () => {
    return (
        <Page>
            <div className='container-fluid pt-3 pb-3' style={{height:'auto'}}>
                <h1 className='mt-4 mb-5 text-center'>
                    <span style={{ color: "#ED2939" }}>S</span>mall projects
                </h1>
                <div className={'row'}>
                    <div className={'col-md-3 mb-4'}>
                        <Container>
                            <div className='container' style={{width:'90%'}}>
                                {/*TODO Redisign logo because github logo cannot be modified */}
                                <img src={FindOnGithubLogo} alt={'Find on Github logo'}/>
                            </div>
                                <Link
                                    style={{textDecoration:'none'}}
                                    to='/projects/findOnGithub'
                                    className={'d-flex justify-content-center mb-3'}
                                >
                                    <Button
                                            style={{align:'center', width:'90%'}}>
                                        Find on GitHub
                                    </Button>
                                </Link>
                        </Container>
                    </div>
                    <div className={'col-md-3 mb-4'}>
                        <Container>
                            <div className='container' style={{width:'90%'}}>
                                <img src={FindOnGithubLogo} alt={'Find on Github logo'}/>
                            </div>
                            <Link
                                style={{textDecoration:'none'}}
                                to='/projects/AvatarGenerator'
                                className={'d-flex justify-content-center mb-3'}
                            >
                                <Button className='button text-center'
                                        style={{align:'center', width:'90%'}}>
                                    Avatar Generator
                                </Button>
                            </Link>
                        </Container>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default ProjectPlaceholder;
