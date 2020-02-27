import React, {useContext, useState} from "react";
import '../../Layout/Input/Input.style.css'

import '../../Layout/Buttons/Button/Button.style.css'
import '../../Layout/PageComponent.style.css'
import AuthContext from '../../../context/auth/AuthContext'
import Input from "../../Layout/Input/Input.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import ThemeContext from "../../../context/theme/ThemeContext";

const Login = () => {
  const themeContext =  useContext(ThemeContext);
  const {darkMode} = themeContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([email, password]);
  const [isPressed, setIsPressed] = useState(false);

  console.log(email, password);
  console.log("pressed", isPressed);

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
    <div className={`page ${darkMode ? 'Background-Dark':'Background-Light'}`}>
      <div
          className='container text-center'
      >
        <h1 className='pt-3 pb-3'>
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
    </div>
  );
};

export default Login;
