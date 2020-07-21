import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSec = () => {
  return (
    <div>
      <Header>
        <h1>Fruit Emporium</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </Header>
    </div>
  );
};
