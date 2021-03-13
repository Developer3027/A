import React from 'react';

import {
  RegisterContainer,
  RegisterTopDiv,
  RegisterWrapper,
  RegisterBottomDiv,
  RegisterTitle,
  RegisterSml,
  RegisterLink,
  RegisterForm,
  RegisterInput,
  RegisterInputButton,
  RegisterLabel
} from './style/register.style';

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterTopDiv />
        <RegisterForm>
          <RegisterTitle>Register</RegisterTitle>

          <RegisterLabel>Name</RegisterLabel>
          <RegisterInput type='text' name='user_name' />

          <RegisterLabel>Email</RegisterLabel>
          <RegisterInput type='email' name='user_email' />

          <RegisterLabel>Password</RegisterLabel>
          <RegisterInput type='password' name='user_password' />

          <RegisterLabel>Confirm Password</RegisterLabel>
          <RegisterInput type='password' name='user_password2' />

          <RegisterInputButton type='submit' value='Send' />
          <RegisterBottomDiv>
            <RegisterSml>
              Already have an account? What are you doing here?{' '}
            </RegisterSml>
            <RegisterLink to='/login'>Login</RegisterLink>
          </RegisterBottomDiv>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
