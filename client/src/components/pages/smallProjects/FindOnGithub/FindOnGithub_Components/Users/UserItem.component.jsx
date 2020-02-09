import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ login, avatar_url }) => {
    return (
        <div className={'card text-center mt-2'}>
            <img src={avatar_url} className="card-img-top" alt="Avatar Image"/>
            <div className={'card-body'}>
                <h5 className="card-title">{login}</h5>
                <Link to={`/projects/findOnGithub/user/${login}`} className="btn btn-primary">More...</Link>
            </div>
        </div>
    )
};

export default UserItem;
