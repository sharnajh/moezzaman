import React from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Bio from "./Bio";
import Message from "./Message";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={Bio} />
      <Route path="/contact" component={Message} />
    </div>
  );
};

export default Routes;
