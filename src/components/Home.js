import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
`;

const FruitLi = styled.li`
  list-style: none;
  width: calc(100% / 3 - 25px);
  max-width: 250px;
  height: 250px;
  box-shadow: 0 0 20px 5px lightgrey;
  box-sizing: border-box;
  margin: 20px 5px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  transition: all 0.5s ease-in;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 60%;
    /* position: absolute;
    top: -20px; */
    border-radius: 15px;
  }

  h4 {
    font-size: 24px;
    margin: 0 0 10px;
    border-bottom: solid lightgrey 2px;
    padding: 5px;
    color: black;
  }

  p {
    color: grey;
    font-style: italic;
  }
`;

const Fruit = ({ item }) => {
  const { id, name, latinName, imageSrc } = item;
  return (
    <FruitLi>
      <img src={imageSrc} alt={name} />
      <Link to={`/items/${id}`}>
        <h4>{name}</h4>
      </Link>
      <p>{latinName}</p>
    </FruitLi>
  );
};

const Homepage = ({ items }) => {
  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <h3>Browse items:</h3>
      <ListingGrid>
        {items.map((item) => {
          return <Fruit key={item.id} item={item} />;
        })}
      </ListingGrid>
    </div>
  );
};

export default Homepage;
