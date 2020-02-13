import React from "react";

const ContactPage = () => {
  return (
    <div className='container col-md-6 text-center mt-3 mb-3'>
      <div className='alert alert-warning'>contact page is in development</div>
      <h3>Send me an email</h3>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Subject</label>
          <input type='Text' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='InputEmail1'>Email address</label>
          <textarea
            type='text'
            className='form-control'
            placeholder='Your message...'
          />
        </div>
      </form>
      <div className='alert alert-info'>
        <strong>crazyredkitten@icloud.com</strong>
      </div>
    </div>
  );
};

export default ContactPage;