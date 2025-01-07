import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectDetails = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <article
      className={`flex flex-row items-center justify-center h-screen  transform transition-all duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0 '}`}
    >
      <ProjectCard />
    </article>
  );
};

export default ProjectDetails;
