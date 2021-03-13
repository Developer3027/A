import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// cSpell:ignore tooltiptext progid playfair btns

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #000;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  p, a, span, input, textarea, label, li, small {
    font-family: 'Maven Pro', sans-serif;
  }

  .tooltip {
    display: inline-block;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #333;
  }

  .tooltip:hover {
    border-bottom: 1px solid #c9e265;
  }

  .tooltip .tooltiptext {
    font-family: 'Maven Pro', sans-serif;
    background-color: #555;
    border-radius: 6px;
    border: 1px solid #c9e265cb;
    bottom: -125%;
    color: #fff;
    font-size: 12px;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    padding: 5px 0;
    position: absolute;
    text-align: center;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    visibility: hidden;
    width: 120px;
    z-index: 1;

    @media (max-width: 920px) {
    bottom: -175%;
  }

  @media (max-width: 750px) {
    bottom: -200%;
  }
  }

  .tooltip:hover .tooltiptext {
    opacity: 1;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    visibility: visible;
  }

  .card-first {
    margin-top: 3em;

    @media (max-width: 900px) {
      margin: 1em auto;
    }
  }

  .card-last {
    margin-top: -3em;

    @media (max-width: 900px) {
      margin: 1em auto;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
`;

export const AppSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 2em 0;
  overflow-x: hidden;
`;

export default GlobalStyle;
