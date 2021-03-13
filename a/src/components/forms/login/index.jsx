import React from 'react';

import {
  LoginContainer,
  LoginTopDiv,
  LoginWrapper,
  LoginBottomDiv,
  LoginTitle,
  LoginSml,
  LoginLink,
  LoginForm,
  LoginInput,
  LoginInputButton,
  LoginLabel
} from './style/login.style';

const Login = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTopDiv />
        <LoginForm>
          <LoginTitle>Login</LoginTitle>
          <LoginLabel>Name</LoginLabel>
          <LoginInput type='text' name='user_name' />
          <LoginLabel>Email</LoginLabel>
          <LoginInput type='email' name='user_email' />
          <LoginInputButton type='submit' value='Send' />
          <LoginBottomDiv>
            <LoginSml>
              Don’t have an account yet? You should register and join the fun!{' '}
            </LoginSml>
            <LoginLink to='/register'>Register</LoginLink>
          </LoginBottomDiv>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
