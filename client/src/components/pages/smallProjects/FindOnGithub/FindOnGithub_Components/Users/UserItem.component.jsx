import React from "react";

const UserItem = ({login, avatar_url,html_url }) => {
    return (
        <div className={'card text-center mt-2'}>
            <img src={avatar_url} className="card-img-top" alt="Avatar Image"/>
            <div className={'card-body'}>
                <h5 className="card-title">{login}</h5>
                <a href={html_url} className="btn btn-primary">Go to GitHub</a>
            </div>
        </div>
    )
};

export default UserItem;
