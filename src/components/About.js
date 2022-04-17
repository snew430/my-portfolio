import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const About = () => {
  const [value, setValue] = useState("Where I'm From");
  const [aboutMe] = useState([
    {
      title: "Where I'm From",
      description:
        "I grew up outside of Baltimore, Maryland.  When I was in High School, I became very interested in computers.  I taught myself how to build computers from scratch and had a summer job as a computer tech at our local community college.  I enrolled in AP Computer Science and learned languages like C++ and JavaScript at a very young age. I attended West Virginia University where I received my Bachelor's Degree in Sport and Exercise Psychology.  After graduating, it was time to start a career.  I applied for a job in retail management, worked hard and never gave up.  My employer relocated me to North Carolina, and that is where my life took a serious change of direction...",
    },
    {
      title: "Where I've Been",
      description:
        "To make a long story short, I found the love of my life, got married, and started traveling the world. We have lived in North Carolina, Virginia, and currently Georgia since getting married and have not only learned alot from our travels, but also in our homes.  I learned through my travels that you discover more about yourself when you get out of your comfort zone and immerse yourself into someone else's. I love school and value education.  Through education, we can become better people and push the limits to what we know as a person, community, society, or even as an entire race for generations.  I decided that I wanted to enroll at Vanderbilt University's Full-Stack Web Development Certification Course and continue to learn and get back to a world I was once familiar with.  Anything is possible as long as you work hard, stay grounded, and keep trust in the people you love...",
    },
    {
      title: "Where I'm Going",
      description:
        "I will keep pushing my limits, test my mind and body, and strive to see all the world has to offer.",
    },
  ]);
  const currentAbout = aboutMe.filter((about) => about.title === value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="section" id="about">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="Where I'm From" label="Where I'm From" wrapped />
        <Tab value="Where I've Been" label="Where I've Been" wrapped />
        <Tab value="Where I'm Going" label="Where I'm Going" wrapped />
      </Tabs>
      <div className="about-text">
        <h4>{currentAbout[0].description}</h4>
      </div>
    </Box>
  );
};

export default About;
