import React, {useState, useContext, useEffect, Fragment} from "react";
import '../../Layout/Input/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'
import AuthContext from '../../../context/auth/AuthContext'
import Navbar from "../../Navbar";

const Registration = () => {
    const authContext =  useContext(AuthContext);
    const {register, error} = authContext;

    useEffect(() => {
        if(error === "User already exist!"){
            console.log('User already exist!');
        }
    }, [error]);

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        passwordConfirmation:''
        }
    );

   const {firstName, lastName, email, password, passwordConfirmation} = user;

   const onChange = event => {setUser({...user, [event.target.name]: event.target.value} )};

   const onSubmit = event => {
       event.preventDefault();
       if (firstName === '' || lastName ==='' || email === '' || password === '') {
           console.log('Please enter all fields');
       } else if (password !== passwordConfirmation) {
           console.log('Passwords do not match');
       } else {
           register({
               firstName,
               lastName,
               email,
               password
           });
       }
   };

  return (
      <Fragment>
          <Navbar/>
          <div className='container text-center'>
              <h1 className='mt-3 mb-3'>
                  <span style={{ color: "#ED2939" }}>R</span>egistration
              </h1>
              <div className='d-flex justify-content-center'>
                  <form className='mb-5 col-lg-5' onSubmit={onSubmit}>
                      <div className='row'>
                          <div className='col-sm-6'>
                              <input
                                  type='text'
                                  name='firstName'
                                  value={firstName}
                                  onChange={onChange}
                                  placeholder={'First name'}
                                  className='Input'
                                  required
                              />
                          </div>
                          <div className='col-sm-6'>
                              <input
                                  type='text'
                                  name='lastName'
                                  value={lastName}
                                  onChange={onChange}
                                  placeholder={'Last name'}
                                  className='Input'
                                  required
                              />
                          </div>
                      </div>
                      <input
                          type='email'
                          name='email'
                          value={email}
                          onChange={onChange}
                          placeholder={'Email'}
                          className='Input'
                          required
                      />
                      <input
                          type='password'
                          name='password'
                          value={password}
                          onChange={onChange}
                          placeholder={'Password'}
                          className='Input'
                          required
                      />
                      <input
                          type='password'
                          name='passwordConfirmation'
                          value={passwordConfirmation}
                          onChange={onChange}
                          placeholder={'Confirm password'}
                          className='Input'
                          required
                      />
                      <button
                          type='submit'
                          className='button button-block'
                          style={{height:'50px', fontWeight:'bold'}}
                      >
                          <span style={{ color: "#ED2939" }}>C</span>reate account
                      </button>
                  </form>
              </div>
          </div>
      </Fragment>
  );
};

export default Registration;