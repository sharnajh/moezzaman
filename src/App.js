import React from "react";
import "./App.css";
import BgSVG from "./BgSVG";
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
