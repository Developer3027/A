import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  background-color: #333;
  border-top: 2px solid #fff;
  width: 100%;
  height: 100%;
  padding: 0.5em 0;
`;

export const FooterWrapper = styled.div`
  display: --ms-grid;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`;

export const FooterMain = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  margin-left: 2em;
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FooterMid = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FooterDiv = styled.div`
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
    margin: auto 50%;
  }
`;

export const FooterLogo = styled.img`
  z-index: 5;
  margin-top: -60%;
`;

export const FooterTitle = styled.h1`
  color: #10c500;
  margin: 0.5em 1.5em 0 0;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const FooterP = styled.p`
  color: #fff;
  margin: 0 2.8em 0 0;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const FooterUL = styled.ul``;

export const FooterLI = styled.li`
  list-style: none;
  color: #fff;
  padding: 0.3em 0;

  &:hover {
    color: #10c500;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
`;

export const FooterAnchor = styled.a`
  text-decoration: none;
`;
