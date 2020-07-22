import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { sellers } from "../data";
import { HeaderSec } from "./Header";
import { Homepage } from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetail";
import Sellers from "./Sellers";
import SellerPage from "./SellerPage";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
  }

  a {
    /* height: 20px; */
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
          <Homepage items={Object.values(items)} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails items={items} sellers={sellers} />
        </Route>
        <Route exact path="/sellers">
          <Sellers sellers={Object.values(sellers)} />
        </Route>
        <Route path="/sellers/:sellerId">
          <SellerPage items={Object.values(items)} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
