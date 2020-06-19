import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import GlobalStyle from "./GlobalStyle";
import Navigation from "./Navigation";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </Router>
  );
};

export default App;
