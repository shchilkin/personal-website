import React from "react";
import '../../Layout/Input/Input.style.css'
import '../../Layout/Alert/Alert.style.css'

const ContactPage = () => {
  return (
    <div className='container col-md-6 text-center mt-3 mb-3'>
      <h2 className={'mt-4 mb-5'}>Send me an email</h2>
      <form>
          <input style={{marginBottom:'1.5rem'}} placeholder={'Name'} type='text' className='Input' />
          <input style={{marginBottom:'1.5rem'}} placeholder={'Email'} type='email' className='Input' />
          <input style={{marginBottom:'1.5rem'}} placeholder={'Subject'} type='text' className='Input' />
          <textarea style={{marginBottom:'1.5rem', minHeight:80}} placeholder={'Your message...'}  className='Input' />
      </form>
      <div className='Alert Alert-info'>
        <strong>crazyredkitten@icloud.com</strong>
      </div>
    </div>
  );
};

export default ContactPage;