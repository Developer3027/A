// cSpell: ignore slateblue
import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const ContactTopDiv = styled.div`
  width: 800px;
  height: 3em;
  background: -webkit-linear-gradient(180deg, #faff00, #ad00ff, #10c500);
  border-radius: 5px 5px 0 0;
`;

export const ContactWrapper = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  -ms-flex-direction: column;
  flex-direction: column;

  background-color: #333;
`;

export const ContactForm = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  -ms-flex-direction: column;
  flex-direction: column;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const ContactText = styled.p`
  color: #fff;
  width: 350px;
`;

export const ContactInput = styled.input`
  color: #333;
  padding: 0.5em 0;
  width: 100%;
`;

export const ContactInputButton = styled.input`
  margin-top: 1em;
  padding: 1em 4em;
  width: 100%;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 3px;

  -webkit-transition: ease 0.5s;
  -o-transition: ease 0.5s;
  transition: ease 0.5s;

  &:hover {
    background-color: slateblue;
    outline: 1px solid #fff;
    outline-offset: -7px;
    cursor: pointer;
    color: #fff;
  }
`;

export const ContactLabel = styled.label`
  align-self: flex-start;
  color: #fff;
  margin: 0.5em 0;
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 0.5em 0;
`;
