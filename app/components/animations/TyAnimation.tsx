"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TyAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Nazmul Hasan",
        1500,
        "Web Developer",
        1000,
        "Mobile Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}

export default TyAnimation;
