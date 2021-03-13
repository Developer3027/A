import React from 'react';

import ProjectsCard from '../element/projects_card';
import { ProjectContainer } from './style/projects.style';
import { projects } from '../../data';

const Projects = () => {
  return (
    <ProjectContainer>
      {projects.map((item) => (
        <ProjectsCard
          key={item.id}
          image={item.img}
          anchor={item.anchor}
          title={item.title}
          text={item.body}
        />
      ))}
    </ProjectContainer>
  );
};
export default Projects;
