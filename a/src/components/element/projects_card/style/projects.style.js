import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  background-color: #1b1b1b;
`;

export const ProjectHeader = styled.div`
  margin: 2em 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const ProjectImage = styled.img`
  width: 30vw;
  border-radius: 0 5px 5px 0;
  padding-left: 0.5em;
`;

export const ProjectContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  padding: 0.5em 1em;
  border-bottom: 5px solid #333;
`;

export const ProjectTitle = styled.h3`
  color: #fff;
  margin: 0;
  padding-bottom: 1em;
`;

export const ProjectText = styled.p`
  color: #fff;
`;
