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
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartLine = ({ item, onAddCart, onRemoveCart }) => {
  const { image, name, id, price, discount, quantityDouble } = item;
  const greenTeaId = "GR1";
  return (
    <StyledCartLine>
      <img src={image} alt={name} />
      <StyledInfoItem>
        <StyledName>{name}</StyledName>
        <InfoSmall>id: {id}</InfoSmall>
        <InfoSmall2>Price unit: {formatterNumber(price)}</InfoSmall2>
        {id === greenTeaId ? (
          <StyledDiscounts>
            Total items: {formatterNumber(quantityDouble)}
          </StyledDiscounts>
        ) : (
          <StyledDiscounts>
            discounts: -{formatterNumber(discount)}
          </StyledDiscounts>
        )}
      </StyledInfoItem>
      <QuantitySelector
        item={item}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
    </StyledCartLine>
  );
};

export default CartLine;
