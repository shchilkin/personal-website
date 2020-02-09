import React from "react";

const RepoItem = ({repo}) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <a href={repo.html_url}>{repo.name}</a>
                <h6><span className={'badge badge-secondary'}>{repo.language}</span></h6>
                <p>{repo.description}</p>
            </div>
        </div>
    )
};

export default RepoItem;