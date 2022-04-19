import React from "react";

const Project = ({ project, onClick }) => {
  return (
    <div key={project.name} className="project">
      <h1 onClick={onClick}>{project.name}</h1>
    </div>
  );
};

export default Project;
