import React, {useState} from "react";
import '../../Layout/Input/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'

const Registration = () => {
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
       console.log('Register submit');
   };

  return (
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
            />
            <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                placeholder={'Password'}
                className='Input'
            />
            <input
                type='password'
                name='passwordConfirmation'
                value={passwordConfirmation}
                onChange={onChange}
                placeholder={'Confirm password'}
                className='Input'
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
  );
};

export default Registration;