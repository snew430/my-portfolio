import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ project, onClose }) => {
  const { name, deploy, repo, tagline, pic } = project;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <hr />
        <CloseIcon onClick={onClose} className="close" />
        <h3 className="modalTitle">{name}</h3>
        <p>{tagline}</p>
        {pic ? (
          <a href={deploy} target="_blank" rel="noreferrer">
            <img src={pic} alt="project pic" className="modalImage" />
          </a>
        ) : (
          <></>
        )}

        <div className="modalVisits">
          {deploy ? (
            <a href={deploy} target="_blank" rel="noreferrer">
              Visit Deployed App
            </a>
          ) : (
            <></>
          )}
          <a href={repo} target="_blank" rel="noreferrer">
            Visit Github Repo
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Modal;
