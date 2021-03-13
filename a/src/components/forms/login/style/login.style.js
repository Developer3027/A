// cSpell: ignore slateblue
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginTopDiv = styled.div`
  width: 800px;
  height: 3em;
  background: -webkit-linear-gradient(180deg, #faff00, #ad00ff, #10c500);
  border-radius: 5px 5px 0 0;
`;

export const LoginBottomDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 2em 0;
`;

export const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #333;
  width: 800px;
  padding-bottom: 2em;
  margin-top: 10em;
  height: 100%;
  border-radius: 0 0 5px 5px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.h2`
  color: #fff;
  width: 350px;
`;

export const LoginSml = styled.small`
  color: #fff;
  padding: 1em 0;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #10c500;
  }
`;

export const LoginInput = styled.input`
  color: #333;
  padding: 0.5em 0;
  width: 100%;
`;

export const LoginInputButton = styled.input`
  margin-top: 1em;
  padding: 1em 4em;
  width: 100%;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  transition: ease 0.5s;

  &:hover {
    background-color: slateblue;
    outline: 1px solid #fff;
    outline-offset: -7px;
    cursor: pointer;
    color: #fff;
  }
`;

export const LoginLabel = styled.label`
  align-self: flex-start;
  color: #fff;
  margin: 0.5em 0;
`;
