import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { HeaderSec } from "./header";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    margin-left: 30px;
  }
`;

const App = (props) => {
  return (
    <Router>
      <GlobalStyles />
      <HeaderSec></HeaderSec>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/about">About</Route>
      </Switch>
    </Router>
  );
};

export default App;
