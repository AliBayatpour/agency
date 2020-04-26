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
        <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route path="/whoweare" component={WhoWeAre} />
        <Route path="/whatwehavedone" component={WhatWeHaveDone} />
        <Route path="/howwework" component={HowWeWork} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
