import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SellersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SellerDiv = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    text-shadow: 1px 1px 2px turquoise;
  }
  img {
    width: 400px;
    height: 450px;
  }
`;

const Seller = ({ seller }) => {
  return (
    <SellerDiv>
      <h2>{seller.id.toUpperCase()}</h2>
      <Link to={`/sellers/${seller.id}`}>
        <img src={seller.avatarSrc} alt={seller.id} />
      </Link>
      <p>{seller.description}</p>
    </SellerDiv>
  );
};

const Sellers = ({ sellers }) => {
  return (
    <SellersDiv>
      {sellers.map((seller, index) => {
        return <Seller key={index} seller={seller} />;
      })}
    </SellersDiv>
  );
};

export default Sellers;
