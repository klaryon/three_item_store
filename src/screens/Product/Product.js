import React from "react";
import Body from "../../components/layout/Body/Body";
import { StyledProduct } from "./styles";
import CardItem from "../../components/units/CardItem/CardItem";

const Product = ({ items, onAddCart, totalItems }) => {
  const cardItem = items.map((item) => (
    <CardItem key={item.id} item={item} onAddCart={onAddCart} />
  ));

  return (
    <Body totalItems={totalItems}>
      <StyledProduct>{cardItem}</StyledProduct>
    </Body>
  );
};

export default Product;
