import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const PBanner = ({ photo }) => {
  return (
    <ParallaxBanner layers={[{ image: photo, speed: -10 }]} className="image">
      <div className="PBannerOverlay">
        <h1 className="PBannerText">Hello World!</h1>
      </div>{" "}
    </ParallaxBanner>
  );
};

export default PBanner;
