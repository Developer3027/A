import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';

import {
  ContactContainer,
  ContactTopDiv,
  ContactWrapper,
  ContactText,
  ContactForm,
  ContactInput,
  ContactInputButton,
  ContactTextArea,
  ContactLabel,
} from './style/contact.style';

const ContactUs = () => {
  const [mail, setMail] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    setMail(true);
    emailjs
      .sendForm(
        'service_akre7hr',
        'template_c36krrs',
        e.target,
        'user_HoHBVLe2Oc5kqKGS00qd8'
      )
      .then(
        (result) => {
          console.log(mail);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  if (mail === true) {
    return <Redirect exact to='/' />;
  }

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactTopDiv/>
        <ContactForm className='contact-form' onSubmit={sendEmail}>
        <ContactText>There are many ways to get in touch with me. My email address is dev3027@mason-roberts.com, or you can drop a quick tweet at @Developer3027, or I have provided this form!</ContactText>
          <ContactLabel>Name</ContactLabel>
          <ContactInput type='text' name='user_name' />
          <ContactLabel>Email</ContactLabel>
          <ContactInput type='email' name='user_email' />
          <ContactLabel>Message</ContactLabel>
          <ContactTextArea name='message' />
          <ContactInputButton type='submit' value='Send' />
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactUs;
