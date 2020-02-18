import React from "react";
import '../../Layout/Input/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'
import '../../Layout/Alert/Alert.style.css'

const ContactPage = () => {
  return (
    <div className='container col-md-6 text-center mt-3 mb-3'>
      <h2 className={'mt-4 mb-5'}>Send me an email</h2>
      <form>
          <div className={'row'}>
              <div className={'col-md'}>
                  <input style={{marginBottom:'1.5rem', display:'inline-block'}}
                         placeholder={'Name'}
                         type='text'
                         className='Input'
                         onFocus={event=> event.target.placeholder=''}
                         onBlur={event=> event.target.placeholder='Name'}/>
              </div>
              <div className={'col-md'}>
                  <input style={{marginBottom:'1.5rem'}}
                         placeholder={'Email'}
                         type='email'
                         className='Input'
                         onFocus={event=> event.target.placeholder=''}
                         onBlur={event=> event.target.placeholder='Email'}/>
              </div>
          </div>
          <input style={{marginBottom:'1.5rem'}}
                 placeholder={'Subject'}
                 type='text'
                 className='Input'
                 onFocus={event=> event.target.placeholder=''}
                 onBlur={event=> event.target.placeholder='Subject'}/>
          <textarea style={{marginBottom:'1.5rem', minHeight:80}}
                    placeholder={'Your message...'}
                    className='Input'
                    onFocus={event=> event.target.placeholder=''}
                    onBlur={event=> event.target.placeholder='Your message...'}/>
          <button className={'button button-block mb-5'} type={"submit"}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;