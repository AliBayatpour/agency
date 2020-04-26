import React from "react";
import "./App.styles.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home.component";
import WhoWeAre from "./pages/whoWeAre/WhoWeAre.component";
import WhatWeHaveDone from "./pages/whatWeHaveDone/whatWeHaveDone.component";
import SideMenu from "./components/sideMenu/SideMenu.component";
import HowWeWork from "./pages/howWeWork/HowWeWork.component";

const App = () => {
  return (
    <React.Fragment>
      <SideMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/whoweare" component={WhoWeAre} />
        <Route exact path="/whatwehavedone" component={WhatWeHaveDone} />
        <Route exact path="/howwework" component={HowWeWork} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
