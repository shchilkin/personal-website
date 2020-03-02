import React, {useState, Fragment, useContext} from "react";
import {BrowserRouter as Router,Link, Route, Switch} from "react-router-dom";
import axios from "axios";
import User from "./FindOnGithub_Components/Users/User.component";
import Users from './FindOnGithub_Components/Users/Users.component'
import Alert from "../../../Layout/Alert/Alert.component";
import Search from "./FindOnGithub_Components/Search.component";
import projectPlaceholder from '../projectPlaceholder.component'
import Page from "../../../Layout/Page/Page.component";
import ThemeContext from "../../../../contexts/theme/ThemeContext";
import '../../../Layout/PageComponent.style.css'

const FindOnGithub = () => {
const [users, setUsers] = useState([]);
const [user, setUser] = useState({});
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(false);
const [alertMessage, setAlertMessage] = useState(null);
const [alertType, setAlertType] = useState(null);
const themeContext =  useContext(ThemeContext);
const {darkMode} = themeContext;

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
    // TODO use global alert
    const setAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);
        setTimeout(()=> (setAlertMessage(null)), 5000);
        setTimeout(()=> (setAlertType(null)), 5000);
    };

    return(
        <Page>
        <Router>
            <Switch>
                <Route
                    exact path='/projects'
                    component={projectPlaceholder}
                />
                <Route
                    exact path='/projects/findOnGithub'
                    render={() => (
                        <div className={`${darkMode ? 'Background-Dark':'Background-Light'}`}>
                            <div className={`container`}>
                                <Link to='/projects'>
                                    To the small projects page
                                </Link>
                            <h3 className={'mb-4'}>Find on GitHub</h3>
                            <Alert message={alertMessage} type={alertType} />
                            <Search
                                searchUsers={searchUsers}
                                clearUsers={clearUsers}
                                showClear={users.length > 0}
                                setAlert={setAlert}
                            />
                            <Users loading={loading} users={users}/>
                            </div>
                        </div>
                    )}
                />
                <Route
                    exact
                    path='/projects/findOnGithub/user/:login'
                    render={props => (
                        <Fragment>
                            <User {...props} getUser={getUser} getRepos={getRepos} repos={repos} user={user} loading={loading}/>
                        </Fragment>
                    )}
                />
            </Switch>
        </Router>
        </Page>
    )
};

export default FindOnGithub
