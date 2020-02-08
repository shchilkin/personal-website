import React from "react";
import User from './UserItem.component';
import Spinner from "../Spinner.component";

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner/>
    } else {
        return (<div style={userStyle}>
            {users.map(user =>
                (<User key={user.id} login={user.login} avatar_url={user.avatar_url}  html_url={user.html_url} />)
            )}
        </div>)
    }
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1rem'
};

export default Users;
