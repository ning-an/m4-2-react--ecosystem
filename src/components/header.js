import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .selected {
    color: red;
    border-bottom: 2px solid red;
  }
`;

export const HeaderSec = () => {
  return (
    <div>
      <Header>
        <h1>Fruit Emporium</h1>
        <div>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </div>
      </Header>
    </div>
  );
};
