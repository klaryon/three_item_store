import React from "react";
import {
  StyledCartLine,
  StyledName,
  StyledInfoItem,
  InfoSmall,
  InfoSmall2,
  StyledDiscounts,
} from "./styles";
import formatterNumber from "../../../helpers/utils";
import QuantitySelector from "../QuantitySelector/QuantitySelector"

const CartLine = ({ item, handleAddCart, handleRemoveCart }) => {
  return (
    <StyledCartLine>
      <img src={item.image} alt={item.name} />
      <StyledInfoItem>
        <StyledName>{item.name}</StyledName>
        <InfoSmall>id: {item.id}</InfoSmall>
        <InfoSmall2>Price unit: {formatterNumber(item.price)}</InfoSmall2>
        <StyledDiscounts>
          discounts: -{formatterNumber(item.discount)}
        </StyledDiscounts>
      </StyledInfoItem>
      <QuantitySelector item={item} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart}/>
    </StyledCartLine>
  );
};

export default CartLine;
