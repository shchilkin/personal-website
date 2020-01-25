import React, { useState } from "react";
import Eye from "../../../icons/eye.svg";
import EyeCrossed from "../../../icons/eyeCrossed.svg";
import Email from "../../../icons/emailLogo.svg";

const Login = () => {
  const [email, setEmail] = useState([{ email: "" }]);
  const [password, setPassword] = useState([{ password: "" }]);
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
      console.log(email, password, data);
    }
  };

  const onPress = () => {
    isPressed ? setIsPressed(false) : setIsPressed(true);
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
                required
                className='form-control'
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
                type={isPressed ? "text" : "password"}
                required
                className='form-control'
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
                    {isPressed ? null : (
                      <img
                        src={Eye}
                        style={{ width: "20px" }}
                        alt='Eye icon'
                      ></img>
                    )}
                  </div>
                  <div>
                    {isPressed ? (
                      <img
                        src={EyeCrossed}
                        style={{ width: "20px" }}
                        alt='Eye icon'
                      ></img>
                    ) : null}
                  </div>
                </button>
              </div>
            </div>
          </div>
          <button onSubmit={onSubmit} type='submit' className='btn btn-primary'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
