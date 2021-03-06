import React from "react";

const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="224px"
      height="224px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="16"
        strokeWidth="3"
        stroke="#ffffff"
        strokeDasharray="25.132741228718345 25.132741228718345"
        fill="none"
        strokeLinecap="round"
        style={{
          animationPlayState: "running",
          animationDelay: "0s"
        }}
        transform="rotate(29.9688 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.6393442622950818s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          style={{
            animationPlayState: "running",
            animationDelay: "0s"
          }}
        ></animateTransform>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="12"
        strokeWidth="3"
        stroke="#00d5ff"
        strokeDasharray="18.84955592153876 18.84955592153876"
        strokeDashoffset="18.84955592153876"
        fill="none"
        strokeLinecap="round"
        style={{
          animationPlayState: "running",
          animationDelay: "0s"
        }}
        transform="rotate(-29.9688 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.6393442622950818s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
          style={{
            animationPlayState: "running",
            animationDelay: "0s"
          }}
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Loading;
