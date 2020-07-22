import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { HeaderSec } from "./Header";
import Homepage from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetail";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
  }

  a {
    height: 20px;
    text-decoration: none;
    margin: 15px;
  }
`;

const App = ({ items }) => {
  return (
    <Router>
      <GlobalStyles />
      <HeaderSec></HeaderSec>
      <Switch>
        <Route exact path="/">
          <Homepage items={items} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
