import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const PBanner = ({ photo, title }) => {
  return (
    <ParallaxBanner
      layers={[
        { image: photo, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="outerDiv">
              <div className="innerH1 backdrop"></div>
            </div>
          ),
        },
      ]}
      className="image"
    >
      <div className="outerDiv">
        <h1 className="innerH1">{title}</h1>
      </div>
    </ParallaxBanner>
  );
};

export default PBanner;
