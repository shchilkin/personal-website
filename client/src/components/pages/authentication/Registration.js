import React from "react";
import '../../Layout/Input/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'

const Registration = () => {
  return (
    <div className='container text-center'>
      <h1 className='mt-3 mb-3'>
        <span style={{ color: "#ED2939" }}>R</span>egistration
      </h1>
      <div className='d-flex justify-content-center'>
        <form className='mb-5 col-lg-5'>
          <div className='row'>
            <div className='col-md-6'>
                <input type='text' placeholder={'First name'} className='Input' />
            </div>
            <div className='col-md-6'>
                <input type='text' placeholder={'Last name'} className='Input' />
            </div>
          </div>
            <input
              type='email'
              className='Input'
              placeholder='Email'
            />
            <input
              type='password'
              className='Input'
              placeholder='Password'
            />
            <input
              type='password'
              className='Input'
              placeholder='Confirm Password'
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