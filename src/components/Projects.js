import React, { useState } from "react";
import bricks from "../img/Bricks.jpg";
import Modal from "./Modal";

const Projects = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (projectInfo) => {
    setCurrentProject({ ...projectInfo });
    console.log(currentProject);
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
          <div key={project.name} className="project">
            <h1 onClick={() => toggleModal(project)}>{project.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
