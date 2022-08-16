import React, { useState } from 'react';
import bricks from '../img/Bricks.jpg';
import Modal from './Modal';
import Project from './Project';

const Projects = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (projectInfo) => {
    setCurrentProject({ ...projectInfo });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal project={currentProject} onClose={toggleModal} />}
      <div
        className="brick section "
        style={{ backgroundImage: `url(${bricks})` }}
        id="projects"
      >
        {projects.map((project) => (
          <Project
            key={project.name}
            project={project}
            onClick={() => toggleModal(project)}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
