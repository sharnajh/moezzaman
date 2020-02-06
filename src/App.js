import React from "react";
import "./css/App.css";
import BgSVG from "./svgs/BgSVG";
import NavBar from "./NavBar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <NavBar />
      <BgSVG />
      <Routes />
    </div>
  );
};

export default App;
