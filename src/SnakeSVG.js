import React from "react";

const SnakeSVG = () => {
  return (
    <svg
      viewBox="0 0 320 300"
      style={{
        position: "absolute",
        width: "320px",
      }}
    >
      <path
        fill="none"
        stroke="#00d5ff"
        stroke-width="4"
        stroke-dasharray="240 1386"
        d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
      />
    </svg>
  );
};

export default SnakeSVG;
