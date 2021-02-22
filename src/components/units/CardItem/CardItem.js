import React from "react";
import {
  StyledCartItem,
  StyledCardBody,
  Name,
  Price,
  SmallParagraph,
  StyledButton,
  Button,
  Unit,
} from "./styles";
import formatterNumber from "../../../helpers/utils";

const CardItem = ({ item, onAddCart }) => {
  const { image, name, price, description } = item;
  return (
    <StyledCartItem>
      <img src={image} alt={name} />
      <StyledCardBody>
        <Name>{name}</Name>
        <Price>
          {formatterNumber(price)} <Unit>per unit</Unit>
        </Price>
        <SmallParagraph>{description}</SmallParagraph>
      </StyledCardBody>
      <StyledButton>
        <Button onClick={() => onAddCart(item)}>Add to Cart</Button>
      </StyledButton>
    </StyledCartItem>
  );
};

export default CardItem;
