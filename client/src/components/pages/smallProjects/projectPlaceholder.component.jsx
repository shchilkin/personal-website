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
                        <img src={FindOnGithubLogo} alt={'Find on Github logo'}/>
                        <Link className='nav-item nav-link text-center' to='/projects/findOnGithub'>
                            Find on GitHub
                        </Link>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ProjectPlaceholder;
