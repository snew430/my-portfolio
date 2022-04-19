import React from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";

const PBanner = ({ photo, title }) => {
  return (
    <ParallaxBanner
      layers={[
        { image: photo, speed: 40 },
        {
          speed: -15,
          children: (
            <Parallax rotateX={[0, 720, "easeOutCirc"]} className="outerDiv">
              <h1 className="innerH1 backdrop">{title}</h1>
            </Parallax>
          ),
        },
      ]}
      className="image"
    ></ParallaxBanner>
  );
};

export default PBanner;
