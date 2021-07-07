import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Side from "./pages/Side";

import "./App.module.css";

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/side/:force" exact component={Side} />
  </BrowserRouter>
);

export default App;
