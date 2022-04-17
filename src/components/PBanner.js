import React from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";

const PBanner = ({ photo }) => {
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
        { image: "/static/banner-foreground.png", speed: -10 },
      ]}
      className="image"
    >
      <div className="outerDiv">
        <h1 className="innerH1">Hello World!</h1>
      </div>
    </ParallaxBanner>
  );
};

export default PBanner;
