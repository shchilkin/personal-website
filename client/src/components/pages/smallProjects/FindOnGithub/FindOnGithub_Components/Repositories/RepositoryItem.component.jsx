import React from "react";
import Card from "../../../../../Layout/Card/Card.component";

const RepoItem = ({repo}) => {
    return (
        <Card>
            <a href={repo.html_url} style={{margin:"1rem 0 0 1rem"}}>{repo.name}</a>
            <h6 style={{margin:"1rem 0 0 1rem"}}><span className={'badge badge-secondary'}>{repo.language}</span></h6>
            <p style={{margin:"1rem 0 1rem 1rem"}}>{repo.description}</p>
        </Card>
        // <div className="card mb-2">
        //     <div className="card-body">
        //
        //     </div>
        // </div>
    )
};

export default RepoItem;