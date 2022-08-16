import React from 'react';
import walking from '../img/Walking.jpg';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div
      className="head section"
      style={{ backgroundImage: `url(${walking})` }}
    >
      <h1>Hello and Welcome</h1>
      <h2>I am Sean New</h2>
      <h4>
        <Typewriter
          options={{
            strings: ['Software Engineer', 'Leader', 'Problem Solver'],
            autoStart: true,
            loop: true,
          }}
        />
        pushing the limits of technology
      </h4>
    </div>
  );
};

export default Header;
