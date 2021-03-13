import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  width: 850px;
  height: 100%;
  background-color: #fff;
  outline: 2px solid #000;
  outline-offset: -10px;
  margin: 6em auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PlateTwoCol = styled.div`
  grid-template-columns: 50% 50%;
  display: flex;

  @media (max-width: 900px) {
    grid-template-columns: none;
    grid-template-rows: 50% 50%;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  /* background-image: url('./images/design-port-plate.png');
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: calc(100% - 1em);
  background-position-y: 2em; */
`;

export const TopSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5em;
`;

export const Button = styled(Link)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  text-decoration: none;
  padding: 0.5em 1.5em;
  margin: 1em;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const PlateSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`;

export const PlateText = styled.span`
  color: #000;
  margin-right: 2em;
`;

export const PlateTextWidth = styled.span`
  color: #000;
  width: 100px;
`;

export const PlateH3 = styled.h3`
  color: #000;
  margin-top: 0.5em;
  margin-left: 1em;
`;

export const PlateP = styled.p`
  color: #000;
  width: 380px;
  margin: 0.5em 0;
  padding: 1em;
`;

export const PlateImgCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const PlateImage = styled.img`
  width: 100%;
`;
