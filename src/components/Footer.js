import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import resume from "../img/SeanNewResume.pdf";

const Footer = () => {
  return (
    <div className="section contact-footer" id="contact">
      {/* <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="email" />
          <textarea type="text" placeholder="message" />
          <button>Submit</button>
        </form> */}
      {/* <div className="contact-footer"> */}
      <a href="https://github.com/snew430">
        <GitHubIcon className="icon" />
      </a>
      <a href="mailto:snew430@gmail.com">
        <EmailIcon className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/snew430/">
        <LinkedInIcon className="icon" />
      </a>
      <a href="tel:410-215-6229">
        <PhoneEnabledIcon className="icon" />
      </a>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <InsertDriveFileIcon className="icon" />
      </a>
      {/* </div> */}
    </div>
  );
};

export default Footer;
