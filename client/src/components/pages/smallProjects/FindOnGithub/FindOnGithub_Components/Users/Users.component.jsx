import React from "react";
import User from './UserItem.component';
import Spinner from "../Spinner.component";
import './users.style.css'

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner/>
    } else {
        return (<div className={'usercards mt-5'}>
            {users.map(user =>
                (<User key={user.id} login={user.login} avatar_url={user.avatar_url}  html_url={user.html_url} />)
            )}
        </div>)
    }
};

export default Users;
