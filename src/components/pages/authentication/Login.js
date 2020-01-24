import React, { useState } from "react";
import Eye from "../../../icons/eye.svg";
import EyeCrossed from "../../../icons/eyeCrossed.svg";
import Email from "../../../icons/emailLogo.svg";

const Login = () => {
  const [email, setEmail] = useState([{ email: "" }]);
  const [password, setPassword] = useState([{ password: "" }]);
  console.log(email, password);
  const [data, setData] = useState([email, password]);
  const [pressed, setPressed] = useState(false);

  console.log("pressed", pressed);

  const changeEmail = event => {
    setEmail({ email: event.target.value });
  };
  const changePassword = event => {
    setPassword({ password: event.target.value });
  };

  const click = event => {
    event.preventDefault();
    setData(email, password);
    console.log(email, password, data);
  };

  const onPress = () => {
    pressed ? setPressed(false) : setPressed(true);
  };

  return (
    <div className='container text-center'>
      <div className='alert alert-warning mt-2'>
        Login page is in development
      </div>
      <h1 className='mt-3 mb-3'>
        <span style={{ color: "cornflowerblue" }}>L</span>ogin
      </h1>
      <div className='d-flex justify-content-center'>
        <form className='mb-3 col-lg-5'>
          <div className='form-group'>
            <label htmlFor='InputEmail1'>Email address</label>
            <div className='input-group'>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                onChange={changeEmail}
              />
              <div
                class='input-group-append'
                style={{ backgroundColor: "white", width: "50px" }}
              >
                <span class='input-group-text'>
                  <img
                    src={Email}
                    style={{ width: "24px" }}
                    alt='email logo'
                  ></img>
                </span>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='InputPassword'>Password</label>
            <div className='input-group'>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword'
                placeholder='Password'
                onChange={changePassword}
              />
              <div className='input-group-append'>
                <button
                  style={{ width: "50px" }}
                  className='btn btn-outline-secondary'
                  type='button'
                  id='button-addon2'
                  data-toggle='button'
                  aria-pressed='false'
                  autocomplete='off'
                  onClick={onPress}
                >
                  <div>
                    {pressed ? null : (
                      <img
                        src={Eye}
                        style={{ width: "20px" }}
                        alt='Eye icon'
                      ></img>
                    )}
                  </div>
                  <div>
                    {pressed ? (
                      <img
                        src={EyeCrossed}
                        fill='white'
                        style={{ width: "20px" }}
                        alt='Eye icon'
                      ></img>
                    ) : null}
                  </div>
                </button>
              </div>
            </div>
          </div>

          <button onClick={click} type='submit' className='btn btn-primary'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
