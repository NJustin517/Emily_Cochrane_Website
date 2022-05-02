import logo from "./logo.svg";
import "./App.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "./modules/Nav/components/Nav";
import Home from "./modules/HomePage/components/Home";
import AboutMe from "./modules/AboutMePage/components/AboutMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
