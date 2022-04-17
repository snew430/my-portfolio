import React from "react";

const Modal = ({ project, onClose }) => {
  const { name, tagline } = project;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        {/* <img src="image" /> */}
        <p>{tagline}</p>
        {/* <a href="url"></a> */}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
