import React, {Fragment, useEffect} from "react";
import Spinner from "../Spinner.component";

const User = ({user, loading, getUser, getRepos, repos, match}) => {
    useEffect(()=>{
        getUser(match.param.login);
        getRepos(match.param.login);
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
};

export default User;
