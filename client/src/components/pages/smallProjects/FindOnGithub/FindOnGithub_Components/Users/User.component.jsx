import React, { useEffect } from "react";
import Spinner from "../Spinner.component";
import Repositories from '../Repositories/Repositories.component'
import Card from "../../../../../Layout/Card/Card.component";
import '../../../../../Layout/Buttons/Button/Button.style.css'
import './User.style.css'
import {Link} from "react-router-dom";

const User = ({user, loading, getUser, repos, getRepos, match}) => {
    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
    }, []);

    const {
        bio,
        name,
        blog,
        login,
        hirable,
        company,
        location,
        html_url,
        followers,
        following,
        avatar_url,
        public_repos,
        public_gists
    } = user;

    if(loading) return <Spinner/>;

    return (
        <div className={'container'}>
            <Link to='/projects/findOnGithub'>Back to the search page</Link>
            <div className={'row'}>
                <div className={'col-md-4 mb-2'}>
                    <div className={'container mt-3'}>
                        <Card className={'mt-3'}>
                        <img className="avatar-image" src={avatar_url} alt="Avatar" />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{login}</h6>
                                {location && (<h6 className="card-subtitle mb-2">{location}</h6>)}
                                {company && (<h6 className="card-subtitle mb-2">{company}</h6>)}
                                <h6 className={'card-subtitle mb-2'}>
                                  {hirable ? <span className={'badge badge-danger'}>{hirable} Not Hirable</span>  :
                                             <span className={'badge badge-success'}>{hirable} Hirable</span>}
                                </h6>
                                <h6 className={'card-subtitle mb-2'}>
                                    <span className={'badge badge-warning'}>{public_repos} Public Repositories</span>{' '}
                                   {public_gists > 0  &&( <span className={'badge badge-info'}>{public_gists} Public Gists</span>)}
                                </h6>
                                <h6 className={'card-subtitle mb-2'}>
                                    <span className={'badge badge-secondary'}>{followers} followers</span>{' '}
                                    <span className={'badge badge-primary'}>{following} following</span>
                                </h6>
                                <p className="card-text">{bio}</p>
                                    {blog && (<p className="card-text"><a href={blog}>{blog}</a></p>)}
                                <a href={html_url} className="button button-block FOG-link text-center">View on Github</a>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className={'col-md-8 mt-3'}>
                    <Repositories repos={repos}/>
                </div>
            </div>
        </div>
    )
};

export default User;