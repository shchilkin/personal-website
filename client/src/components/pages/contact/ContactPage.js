import React from "react";
import '../../Layout/Input/Input.style.css'

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
      <div className='alert alert-info'>
        <strong>crazyredkitten@icloud.com</strong>
      </div>
    </div>
  );
};

export default ContactPage;


// <div className='container col-md-6 text-center mt-3 mb-3'>
//     <div className='alert alert-warning'>contact page is in development</div>
//     <h3>Send me an email</h3>
//     <form>
//         <div className='form-group'>
//             <label>Name</label>
//             <input type='text' className='form-control' />
//         </div>
//         <div className='form-group'>
//             <label>Email</label>
//             <input type='email' className='form-control' />
//         </div>
//         <div className='form-group'>
//             <label>Subject</label>
//             <input type='Text' className='form-control' />
//         </div>
//         <div className='form-group'>
//             <label htmlFor='InputEmail1'>Email address</label>
//             <textarea
//                 type='text'
//                 className='form-control'
//                 placeholder='Your message...'
//             />
//         </div>
//     </form>
//     <div className='alert alert-info'>
//         <strong>crazyredkitten@icloud.com</strong>
//     </div>
// </div>