import React, {useContext, useEffect, useState} from "react";
import '../../Layout/Inputs/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'
import '../../Layout/PageComponent.style.css'
import AuthContext from '../../../context/auth/AuthContext'
import Input from "../../Layout/Inputs/Input.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import Page from "../../Layout/Page/Page.component";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([email, password]);
  const authContext = useContext(AuthContext);

  const {logIn, error, clearErrors, isAuthenticated} = authContext;

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/')
    }

    if(error === "Invalid credentials"){
      console.log('Invalid credentials!');
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const changeEmail = event => {
    setEmail({ email: event.target.value });
  };

  const changePassword = event => {
    setPassword({ password: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (email === "" || password === "") {
      console.warn("Please fill all fields");
    } else {
      setData(email, password);
      console.warn("sending data");
      console.log(email, password, data);
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
            <div className='form-group'>
              <div className='input-group'>
                <Input
                  type='email'
                  required={true}
                  placeholder='Enter email'
                  onChange={changeEmail}
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='input-group'>
                <Input
                  // type={isPressed ? "text" : "password"}
                  required={true}
                  placeholder='Password'
                  onChange={changePassword}
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
