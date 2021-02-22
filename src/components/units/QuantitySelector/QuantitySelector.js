import React from "react";
import { StyledCounter, Button, StyledQuantity } from "./styles";

const QuantitySelector = ({ item, onRemoveCart, onAddCart }) => {
  const { quantity } = item;
  return (
    <StyledCounter>
      <Button onClick={() => onRemoveCart(item)}>-</Button>
      <StyledQuantity>{quantity}</StyledQuantity>
      <Button onClick={() => onAddCart(item)}>+</Button>
    </StyledCounter>
  );
};

export default QuantitySelector;
