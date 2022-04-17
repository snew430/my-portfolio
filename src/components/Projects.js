import React, { useState } from "react";
import bricks from "../img/Bricks.jpg";
import Modal from "./Modal";

const Projects = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (projectInfo, i) => {
    setCurrentProject({ ...projectInfo, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal project={currentProject} onClose={toggleModal} />}
      <div
        className="brick section"
        style={{ backgroundImage: `url(${bricks})` }}
      >
        {projects.map((project, i) => (
          <div onClick={() => toggleModal(project, i)} key={project.name}>
            <h1>{project.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
