import React, {useState} from "react";
import '../../Layout/Inputs/Input.style.css'
import '../../Layout/Buttons/Button/Button.style.css'
import '../../Layout/Alert/Alert.style.css'
import Page from "../../Layout/Page/Page.component";
import Input from "../../Layout/Inputs/Input.component";
import Button from "../../Layout/Buttons/Button/Button.component";
import TextArea from "../../Layout/Inputs/TextArea.component";

const ContactPage = () => {

    const [message, setMessage] = useState(
        {
            name:'',
            email:'',
            subject:'',
            text:''
        }
    );
    console.log(message);

    const { name, email, subject, text } = message;

    const onChange = event => {setMessage({...message, [event.target.name]: event.target.value})};

    const onSubmit = event => {
        event.preventDefault();

        // TODO Check that all fields are not empty and email is valid

        // TODO send data to server
        console.log(message);

        // TODO Output alert with success / fail if something goes wrong

        // Clean fields
        setMessage({name: '', email: '',subject: '', text: '' });
    };

  return (
      <Page>
        <div className='container col-md-6 text-center pt-3 pb-5'>
            <h1 className={'mt-4 mb-5'}> <span style={{ color: "#ED2939" }}>S</span>end me an email</h1>
          <form onSubmit={onSubmit}>
              <div className={'row'}>
                  <div className={'col-md'}>
                      <Input
                             placeholder={'Name'}
                             name={'name'}
                             value={name}
                             onChange={onChange}
                             type='text'
                             onFocus={event=> event.target.placeholder=''}
                             onBlur={event=> event.target.placeholder='Name'}
                      />
                  </div>
                  <div className={'col-md'}>
                      <Input
                             placeholder={'Email'}
                             name={'email'}
                             value={email}
                             onChange={onChange}
                             type='email'
                             onFocus={event=> event.target.placeholder=''}
                             onBlur={event=> event.target.placeholder='Email'}
                      />
                  </div>
              </div>
              <Input
                     placeholder={'Subject'}
                     name={'subject'}
                     value={subject}
                     onChange={onChange}
                     type='text'
                     onFocus={event=> event.target.placeholder=''}
                     onBlur={event=> event.target.placeholder='Subject'}
              />
              <TextArea style={{marginBottom:'1.5rem', minHeight:80}}
                        placeholder={'Your message...'}
                        name={'text'}
                        value={text}
                        onChange={onChange}
                        className='Input'
                        onFocus={event=> event.target.placeholder=''}
                        onBlur={event=> event.target.placeholder='Your message...'}
              />
              <Button
                  type={"submit"}
                  block={true}
                  style={{height:'50px', fontWeight:'bold'}}
              >Send Message</Button>
          </form>
        </div>
    </Page>
  );
};

export default ContactPage;