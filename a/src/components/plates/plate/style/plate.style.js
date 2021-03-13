import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Main = styled(motion.div)`
  width: 850px;
  height: 100%;
  background-color: #fff;
  outline: 2px solid #000;
  outline-offset: -10px;
  margin: 4em auto;
  overflow-x: hidden;

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
`;

export const TopSec = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5em;
`;

export const PlateAnchor = styled(Link)`
  color: #000;
  text-align: center;
  text-decoration: none;
`;

export const PlateButton = styled(motion.p)`
  color: #000;
  padding: 0.5em 1.5em;
  margin: 1em;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #10c500;
  }
`;

export const PlateSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
`;

export const PlateColDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 0;
`;

export const PlateP = styled.p`
  color: #000;
  width: 380px;
  margin: 0;
  padding: 1em;
`;

export const PlateImgCol = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const PlateImage = styled(motion.img)`
  width: 100%;
`;
