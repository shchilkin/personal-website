import React, {useState, useContext, useEffect} from "react";
import '../../Layout/Buttons/Button/Button.style.css'
import '../../Layout/PageComponent.style.css'
import AuthContext from '../../../context/auth/AuthContext'
import Input from "../../Layout/Inputs/Input.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import Page from "../../Layout/Page/Page.component";

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
      <Page>
          <div className='container text-center pt-3 pb-3'>
              <h1 className='mt-4 mb-5'>
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
      </Page>
  );
};

export default Registration;