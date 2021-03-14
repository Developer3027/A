import styled from 'styled-components';
import { Link } from 'react-router-dom';

//? styles for the cards on the design and project sections of the home page.

export const InnerCard = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;

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

  background: rgba(0, 0, 0, 0.8);
`;

export const CardTitle = styled.h2`
  padding: 0 0.5em;
  color: #10c500;
`;

export const CardText = styled.span`
  padding: 0.5em 0;
  color: #fff;
  font-weight: bold;
  border-bottom: 1px solid #fff;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  -webkit-transition: ease 0.5s;
  -o-transition: ease 0.5s;
  transition: ease 0.5s;

  &:hover {
    border-radius: 5px;
    background-color: slateblue;
    outline: 1px solid #fff;
    outline-offset: -15px;
  }
`;
