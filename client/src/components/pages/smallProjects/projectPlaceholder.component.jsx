import React from "react";
import {Link} from "react-router-dom";
import Container from "../../Layout/Container/Container.component";
import FindOnGithubLogo from './FindOnGithub/FindOnGithubLogo.svg';
import '../../Layout/Buttons/Button/Button.style.css'

const ProjectPlaceholder = () => {
    return (
        <div className='container-fluid pt-3 pb-3' style={{height:'auto'}}>
           <h1 className={'text-center'}>Small Projects:</h1>
            <div className={'row'}>
                <div className={'col-md-3'}>
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
                                <button className='button text-center'
                                        style={{align:'center', width:'90%'}}>
                                    Find on GitHub
                                </button>
                            </Link>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ProjectPlaceholder;
