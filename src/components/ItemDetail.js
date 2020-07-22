import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { items, sellers } from "../data";

const ItemDetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  > img {
    border-radius: 20px;
    box-sizing: border-box;
    width: 50%;
  }

  div {
    flex: auto;
    margin-left: 50px;
    align-self: stretch;
  }

  h3 {
    font-size: 32px;
    margin: 0;
  }

  h4 {
    font-style: italic;
    color: grey;
    font-weight: lighter;
    margin-top: 4px;
    margin-bottom: 50px;
  }

  button {
    border-radius: 8px;
    background-color: blue;
    color: white;
    padding: 20px 50px;
    border: none;
    font-size: 1.5em;
    margin: 20px 0;
  }

  div div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0;
  }
  div div img {
    border-radius: 50%;
    width: 3em;
    margin-right: 20px;
  }
`;
const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  return (
    <ItemDetailInfo>
      <img src={item.imageSrc} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <h4>{item.latinName}</h4>
        <p>{item.description}</p>
        <p>
          <em>
            Product of <strong>{item.countryOfOrigin}</strong>
          </em>
        </p>
        <button>
          {item.quantity === 0 ? "Out of Stock" : `$${item.price} - Buy now`}
        </button>
        <div>
          <img src={seller.avatarSrc} alt={seller.id} />
          <p>
            Sold by: <strong>{seller.storeName}</strong>
          </p>
        </div>
      </div>
    </ItemDetailInfo>
  );
};

export default ItemDetails;
