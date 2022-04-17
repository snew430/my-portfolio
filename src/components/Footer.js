import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const Footer = () => {
  return (
    <div className="section contact-footer" id="contact">
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
    </div>
  );
};

export default Footer;
