import React from "react";
import { StyledCounter, Button, StyledQuantity } from "./styles";

const QuantitySelector = ({ item, handleRemoveCart, handleAddCart }) => {
  return (
    <StyledCounter>
      <Button onClick={() => handleRemoveCart(item)}>-</Button>
      <StyledQuantity>{item.quantity}</StyledQuantity>
      <Button onClick={() => handleAddCart(item)}>+</Button>
    </StyledCounter>
  );
};

export default QuantitySelector;
