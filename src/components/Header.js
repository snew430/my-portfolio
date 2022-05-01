import React from "react";
import walking from "../img/Walking.jpg";

const Header = () => {
  return (
    <div
      className="head section"
      style={{ backgroundImage: `url(${walking})` }}
    >
      <h1>Hello and Welcome</h1>
      <h2>I am Sean New</h2>
      <h4>Software Engineer pushing the limits of technology</h4>
    </div>
  );
};

export default Header;
