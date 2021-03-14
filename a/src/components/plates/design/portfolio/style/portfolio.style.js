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

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  @media (max-width: 900px) {
    grid-template-columns: none;
    grid-template-rows: 50% 50%;

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;

    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-orient: vertical;

  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  height: 100%;
`;

export const TopSec = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin: 0 1.5em;
`;

export const Button = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: 0.5em 1.5em;
  margin: 1em;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const PlateSection = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  padding: 1em;
`;

export const PlateImage = styled.img`
  width: 100%;
`;
