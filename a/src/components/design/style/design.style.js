import styled from 'styled-components';
import design from './design-bg.png';

export const DesignBox = styled.div`
  width: 900px;
  height: 100%;
`;

export const DesignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-image: url(${design});
  background-repeat: no-repeat;
  background-position-x: 3em;
  background-position-y: -1.5em;
`;

export const DesignCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2em;
  width: 100%;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const DesignTitle = styled.h1`
  color: #10c500;
  font-size: 3em;
  margin: 0;
  margin-top: 2em;
`;

export const DesignText = styled.p`
  color: #fff;
  width: 60%;
  font-size: 1.5em;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0.3em;
  }
`;
