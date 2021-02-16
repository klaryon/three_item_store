import React from "react";
import Body from "../../components/layout/Body/Body";
import { StyledProduct } from "./styles";
import CardItem from "../../components/units/CardItem/CardItem";

const Product = ({
  items,
  count,
  handleAddCart,
  totalItems,
  handleChange,
  increment,
  decrement,
}) => {
  const cardItem = items.map((item) => (
    <CardItem
      item={item}
      count={count}
      key={item.id}
      handleAddCart={handleAddCart}
      handleChange={handleChange}
      increment={increment}
      decrement={decrement}
    />
  ));

  return (
    <Body totalItems={totalItems}>
      <StyledProduct>{cardItem}</StyledProduct>
    </Body>
  );
};

export default Product;
