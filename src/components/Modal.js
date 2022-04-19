import React from "react";

const Modal = ({ project, onClose }) => {
  const { name, url, tagline, pic } = project;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <p>{tagline}</p>
        <a href={url}>
          <img src={pic} alt="" />
        </a>
        <a href={url}>Visit</a>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
