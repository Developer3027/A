import React from 'react'
import { 
  ProjectContainer,
  ProjectCardContainer,
  ProjectBox,
  ProjectTitle,
  ProjectText } from './style/project.style';

import { DesignCard } from '../element';

import { projectData } from '../../data'

//? the design section of the main section


const Project = () => {

  const DisplayCard = projectData.map(item => {
    
    return (
      <DesignCard 
        key={item.id} 
        title={item.title} 
        desc={item.desc} 
        gap={item.gap}
        imgSrc={item.imgSrc}
        rte={item.rte} />
    )
  });

  return (
    <>
      <ProjectBox>
        <ProjectContainer>
          <ProjectTitle>Web Projects</ProjectTitle>
          <ProjectText>I use VS Code for most of my builds. Working in HTML, CSS, Javascript and React</ProjectText>
          <ProjectCardContainer>
            {DisplayCard}
          </ProjectCardContainer>
        </ProjectContainer>
      </ProjectBox>
    </>
  )
};

export default Project;