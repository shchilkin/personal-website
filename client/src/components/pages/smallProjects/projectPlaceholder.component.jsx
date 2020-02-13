import React from "react";
import {Link} from "react-router-dom";

const ProjectPlaceholder = () => {
    return (
        <div className='container-fluid pt-3 pb-3' style={{height:'auto'}}>
           <h1 className={'text-center'}>Small Projects:</h1>
            <Link className='nav-item nav-link' to='/projects/findOnGithub'>
                Find On GitHub
            </Link>
        </div>
    );
};

export default ProjectPlaceholder;
