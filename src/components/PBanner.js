import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const PBanner = ({ photo }) => {
  return (
    <ParallaxBanner layers={[{ image: photo, speed: -20 }]} className="image">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-thin">Hello World!</h1>
      </div>{" "}
    </ParallaxBanner>
  );
};

export default PBanner;
