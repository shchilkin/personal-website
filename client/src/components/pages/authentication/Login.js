import React, {useContext, useEffect, useState} from "react";
import '../../Layout/Inputs/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'
import '../../Layout/PageComponent.style.css'
import AuthContext from '../../../contexts/auth/AuthContext'
import Input from "../../Layout/Inputs/Input.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import Page from "../../Layout/Page/Page.component";
import AlertContext from "../../../contexts/alert/AlertContext";
import Alerts from "../../Layout/Alert/Alerts.component";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const {login, error, clearErrors, isAuthenticated} = authContext;
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
        email:'',
        password:'',
      }
  );
  const { email, password } = user;

  useEffect(() => {
    if(isAuthenticated){
      // TODO Use react router dom redirect instead of history.push
      props.history.push('/')
    }

    if(error === "Invalid credentials"){
      setAlert('Invalid credentials!', 'danger');
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);


  const onChange = event => {setUser({...user, [event.target.name]: event.target.value} )};

  const onSubmit = event => {
    event.preventDefault();
    if (email === "" || password === "") {
      setAlert('Please fill all fields', 'warning');
    } else {
      login({
        email,
        password
      });
      setAlert('Log in success', 'success');
    }
  };

  return (
    <Page>
      <div
          className='container text-center pt-3 pb-3'
      >
        <h1 className='mt-4 mb-5'>
          <span style={{ color: "#ED2939" }}>L</span>og in
        </h1>
        <div className='d-flex justify-content-center'>
          <form className='mb-3 col-lg-5'>
            <Alerts />
            <div className='form-group'>
              <div className='input-group'>
                <Input
                  type='email'
                  name='email'
                  value={email}
                  required={true}
                  placeholder='Enter email'
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <Input
                  // type={isPressed ? "text" : "password"}
                  type={'password'}
                  name='password'
                  value={password}
                  required={true}
                  placeholder='Password'
                  onChange={onChange}
                />
              </div>
            </div>
            <Button
                onSubmit={onSubmit}
                type='submit'
                block={true}
                style={{height:'50px', fontWeight:'bold'}}
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default Login;
