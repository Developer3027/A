import styled from 'styled-components';
import project from './project-bg.png';

export const ProjectBox = styled.div`
  width: 900px;
  height: 100%;
`;

export const ProjectContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  -ms-flex-direction: column;
  flex-direction: column;

  background-image: url(${project});
  background-repeat: no-repeat;
  background-position-x: 3em;
  background-position-y: -1.5em;
`;

export const ProjectCardContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  padding-top: 2em;
  width: 100%;

  @media (max-width: 620px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;

export const ProjectTitle = styled.h1`
  color: #10c500;
  font-size: 3em;
  margin: 0;
  margin-top: 2em;

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 2em;
  }
`;

export const ProjectText = styled.p`
  color: #fff;
  width: 60%;
  font-size: 1.5em;

  @media (max-width: 900px) {
    width: 90%;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`;
