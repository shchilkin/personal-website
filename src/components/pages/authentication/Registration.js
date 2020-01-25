import React from "react";

const Registration = () => {
  return (
    <div className='container text-center'>
      <div className='alert alert-warning mt-2'>
        Registration page is in development
      </div>
      <h1 className='mt-3 mb-3'>
        <span style={{ color: "cornflowerblue" }}>R</span>egistration
      </h1>
      <div className='d-flex justify-content-center'>
        <form className='mb-3 col-lg-5'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='InputFirstName'>First Name</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='InputLastName'>Last Name</label>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='InputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='InputPassword'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword'
              placeholder='Password'
              // onChange={changePassword}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='InputPassword'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword'
              placeholder='Confirm Password'
              // onChange={changePassword}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
