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

const CardItem = ({ item, handleAddCart }) => {
  return (
    <StyledCartItem>
      <img src={item.image} alt={item.name} />
      <StyledCardBody>
        <Name>{item.name}</Name>
        <Price>
          {formatterNumber(item.price)} <Unit>per unit</Unit>
        </Price>
        <SmallParagraph>{item.description}</SmallParagraph>
      </StyledCardBody>
      <StyledButton>
        <Button onClick={() => handleAddCart(item)}>Add to Cart</Button>
      </StyledButton>
    </StyledCartItem>
  );
};

export default CardItem;
