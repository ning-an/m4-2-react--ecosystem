import React from "react";
import { useParams } from "react-router-dom";

import { Fruit, ListingGrid } from "./Home";

const SellerPage = ({ items }) => {
  const { sellerId } = useParams();
  const sellerItems = items.filter((item) => item.sellerId === sellerId);
  return (
    <ListingGrid>
      {sellerItems.map((item) => {
        return <Fruit key={item.id} item={item} />;
      })}
    </ListingGrid>
  );
};

export default SellerPage;
