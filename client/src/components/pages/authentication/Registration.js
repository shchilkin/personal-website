import React, {useState, useContext, useEffect} from "react";
import '../../Layout/Buttons/Button/Button.style.css'
import './Registration.style.css'
import AuthContext from '../../../context/auth/AuthContext'
import Input from "../../Layout/Input/Input.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import ThemeContext from "../../../context/theme/ThemeContext";

const Registration = () => {
    const authContext =  useContext(AuthContext);
    const {register, error} = authContext;

    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

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
      <div className={`page ${darkMode ? 'Background-Dark':'Background-Light'}`}>
          <div className='container text-center'>
              <h1 className='pt-3 pb-3'>
                  <span style={{ color: "#ED2939" }}>R</span>egistration
              </h1>
              <div className='d-flex justify-content-center'>
                  <form className='mb-5 col-lg-5' onSubmit={onSubmit}>
                      <div className='row'>
                          <div className='col-sm-6'>
                              <Input
                                  type='text'
                                  name='firstName'
                                  value={firstName}
                                  onChange={onChange}
                                  placeholder={'First name'}
                              />
                          </div>
                          <div className='col-sm-6'>
                              <Input
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
                      <Input
                          type='email'
                          name='email'
                          value={email}
                          onChange={onChange}
                          placeholder={'Email'}
                          className='Input'
                          required
                      />
                      <Input
                          type='password'
                          name='password'
                          value={password}
                          onChange={onChange}
                          placeholder={'Password'}
                          className='Input'
                          required
                      />
                      <Input
                          type='password'
                          name='passwordConfirmation'
                          value={passwordConfirmation}
                          onChange={onChange}
                          placeholder={'Confirm password'}
                          className='Input'
                          required
                      />
                      <Button
                          type='submit'
                          style={{height:'50px', fontWeight:'bold'}}
                          block={true}
                      >
                          Create account
                      </Button>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Registration;