import React, { Suspense } from 'react';
import { ProjectContainer } from './style/projects.style';
import { projects } from '../../data';
import Spinner from '../element/spinner';

const ProjectsCard = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('../element/projects_card')), 2000)
    )
);

const Projects = () => {
  return (
    <ProjectContainer>
      {projects.map((item) => (
        <Suspense fallback={<Spinner />}>
          <ProjectsCard
            key={item.id}
            image={item.img}
            anchor={item.anchor}
            title={item.title}
            text={item.body}
          />
        </Suspense>
      ))}
    </ProjectContainer>
  );
};
export default Projects;
