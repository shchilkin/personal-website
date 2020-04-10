import React, { useEffect } from "react";
import Spinner from "../Spinner.component";
import Repositories from '../Repositories/Repositories.component'
import Card from "../../../../../Layout/Card/Card.component";
import './User.style.css'
import {Link} from "react-router-dom";
import Button from "../../../../../Layout/Buttons/Button/Button.component";
import Badge from "../../../../../Layout/Badge/Badge.component";

const User = ({user, loading, getUser, repos, getRepos, match}) => {
    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        // eslint-disable-next-line
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
            <Link to='/projects/findOnGithub' style={{color:'#ed2939'}}>Back to the search page</Link>
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
                                  {hirable ? <Badge>{hirable} Not Hirable</Badge>  :
                                             <Badge type={'small'} className={'Green'}>{hirable} Hirable</Badge>}
                                </h6>
                                <h6 className={'card-subtitle mb-2'}>
                                    <Badge type={'small'} className={'Yellow'}>{public_repos} Public Repositories</Badge>{' '}
                                   {public_gists > 0  &&( <Badge type={'small'} className={'Yellow-Light'}>{public_gists} Public Gists</Badge>)}
                                </h6>
                                <h6 className={'card-subtitle mb-2'}>
                                    <Badge type={'small'} className={'Cyan'}>{followers} followers</Badge>{' '}
                                    <Badge type={'small'} className={'Cyan-Light'}>{following} following</Badge>
                                </h6>
                                <p className="card-text">{bio}</p>
                                    {blog && (<p className="card-text"><a style={{color:'#ed2939'}} href={blog}>{blog}</a></p>)}
                                <a href={html_url} className="FOG-link">
                                    <Button block={true}>View on Github</Button>
                                </a>
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