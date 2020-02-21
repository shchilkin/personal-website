import React, { useState } from "react";
import '../../Layout/Input/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'

const Login = () => {
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
    <div
        className='container text-center'
        style={{height:'100vh',marginTop:"auto",marginBottom:"auto"}}
    >
      <h1 className='mt-3 mb-3'>
        <span style={{ color: "#ED2939" }}>L</span>ogin
      </h1>
      <div className='d-flex justify-content-center'>
        <form className='mb-3 col-lg-5'>
          <div className='form-group'>
            <div className='input-grou'>
              <input
                type='email'
                required
                className='Input'
                placeholder='Enter email'
                onChange={changeEmail}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <input
                type={isPressed ? "text" : "password"}
                required
                className='Input'
                placeholder='Password'
                onChange={changePassword}
              />
            </div>
          </div>
          <button
              onSubmit={onSubmit}
              type='submit'
              className='button button-block'
              style={{height:'50px'}}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
