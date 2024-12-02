import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Infrastructure Automator",
          "Cybersecurity Enthusiast",
          "Cloud Solutions Architect",
          "CI/CD Pipeline Engineer",
          "Certified Coffee Debugger ☕",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
