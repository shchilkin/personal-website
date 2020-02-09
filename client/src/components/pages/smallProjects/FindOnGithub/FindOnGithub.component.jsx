import React,{useState, Fragment} from "react";
import {BrowserRouter as Router,Link, Route, Switch} from "react-router-dom";
import Search from "./FindOnGithub_Components/Search.component";
import User from "./FindOnGithub_Components/Users/User.component";
import Users from './FindOnGithub_Components/Users/Users.component'
import axios from "axios";

const FindOnGithub = () => {
const [users, setUsers] = useState([]);
const [user, setUser] = useState({});
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(false);
const [alert, set_Alert] = useState(null);

    // Search users on Github
    const searchUsers = async text => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setUsers(response.data.items);
        setLoading(false);
    };

    // Get single user data
    const getUser = async username => {
        setLoading(true);

        const response = await axios.get(`https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setUser(response.data);
        setLoading(false);
    };

    //  Get user's repositories
    const getRepos = async username =>{
        setLoading(true);

        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setRepos(response.data);
        setLoading(false);
    };

    //  Clear users
    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    };

    //Set Alert
    const setAlert = (message, type) => {
        set_Alert({message,type});
        setTimeout(()=> set_Alert(null), 5000);
    };


    return(
        <Router>
            <Switch>
                <Route
                    exact
                    path='/projects/findOnGithub'
                    render={props => (
                        <Fragment>
                            <div className='container'>
                            <h4 className={'text-center'}>Find on GitHub</h4>
                            <Search
                                searchUsers={searchUsers}
                                clearUsers={clearUsers}
                                showClear={users.length > 0}
                                setAlert={setAlert}
                            />
                            <Users loading={loading} users={users}/>
                            </div>
                        </Fragment>
                    )}
                />
                <Route
                    exact
                    path='/projects/findOnGithub/user/:login'
                    render={props => (
                        <Fragment>
                            <User {...props} getUser={getUser} user={user} loading={loading}/>
                        </Fragment>
                    )}
                />
            </Switch>
        </Router>
    )
};

export default FindOnGithub
