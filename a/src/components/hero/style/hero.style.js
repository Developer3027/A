import styled from 'styled-components';
import { Link } from 'react-router-dom';

// cSpell:ignore Playfair Btns offset slateblue

export const HeroWrapper = styled.div`
  width: 900px;
  margin-top: 70px;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    display: none;
  }
`;

export const HeroTitleEdge = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: #fff;
  margin-bottom: 0.5em;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeroOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const HeroInner = styled.div`
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const HeroTop = styled.p`
  font-family: 'Maven Pro', sans-serif;
  font-size: 18px;
  color: #fff;
  padding: 0.5em;
  margin: 0 10%;
  margin-top: 6em;

  @media (max-width: 900px) {
    margin-top: 1.5em;
  }

  @media (max-width: 500px) {
    margin: 1em 0;
  }
`;

export const HeroMid = styled.p`
  font-family: 'Maven Pro', sans-serif;
  font-size: 18px;
  color: #fff;
  padding-top: 0.5em;
  padding: 0.5em;
  padding-bottom: 1em;
  margin: 0 10%;

  @media (max-width: 500px) {
    margin: 1em 0;
  }
`;

export const HeroHL = styled.span`
  font-weight: bold;
  color: #ebcb34;
`;

export const HeroBtns = styled.div`
  display: flex;
  z-index: 1;
  justify-content: space-evenly;
  margin: 1em 0;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const HeroBtnTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  background-color: #777;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 3px;
  transition: ease 0.5s;

  &:hover {
    background-color: slateblue;
    outline: 1px solid #fff;
    outline-offset: -7px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    margin: 1em 3em;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const HeroLink = styled(Link)`
  text-decoration: none;
`;

export const HeroTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 5em;
  }
`;

export const HeroText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 4em;
  font-weight: bold;
  margin: 0;
  background: -webkit-linear-gradient(right, #faff00, #ad00ff, #10c500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @supports (-webkit-overflow-scrolling: touch) {
    -webkit-text-fill-color: unset;
  }

  @media (max-width: 374px) {
    font-size: 3.5em;
  }
`;

export const HeroPic = styled.div`
  margin-left: -3rem;

  @media (max-width: 900px) {
    position: absolute;
    top: 7rem;
    left: 25rem;
    opacity: 40%;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const HeroImg = styled.img`
  width: 400px;
`;

//! Mobile layout

export const HeroMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5em 0;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileTop = styled.div`
  display: flex;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileTitleEdge = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: #fff;
  margin-bottom: 0.5em;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobilePic = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileImg = styled.img`
  width: 75%;
  margin-right: 1rem;
  opacity: 50%;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileLow = styled.div`
  margin: 0 auto;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  background: -webkit-linear-gradient(right, #faff00, #ad00ff, #10c500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @supports (-webkit-overflow-scrolling: touch) {
    -webkit-text-fill-color: unset;
  }

  @media (min-width: 430px) {
    display: none;
  }
`;

export const HeroMobileParagraph = styled.p`
  font-family: 'Maven Pro', sans-serif;
  font-size: 18px;
  color: #fff;
  padding: 0 1em;

  @media (min-width: 430px) {
    display: none;
  }
`;
