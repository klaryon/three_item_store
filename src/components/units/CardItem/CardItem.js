import React, { useState } from "react";
import {
  StyledCartItem,
  StyledCardBody,
  Name,
  Price,
  SmallParagraph,
  StyledQuantitySelector,
  StyledButton,
  Button,
  Unit,
} from "./styles";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import formatterNumber from "../../../helpers/utils";

const CardItem = ({
  item,
  count,
  handleAddCart,
  handleChange,
  increment,
  decrement,
}) => {
  const [click, setClick] = useState(false);
  const newCount = count + 1;

  const handleClick = (e) => {
    e.preventDefault();
    setClick(true);
    handleAddCart(
      item.id,
      item.name,
      item.price,
      item.image,
      item.unitdiscount,
      newCount
    );
    localStorage.setItem(item.id, newCount);
  };

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

      {click ? (
        <StyledQuantitySelector>
          <QuantitySelector
            count={count}
            handleChange={(e) => handleChange(e)}
            increment={increment}
            decrement={decrement}
          />
        </StyledQuantitySelector>
      ) : (
        <StyledButton>
          <Button onClick={handleClick}>Add to Cart</Button>
        </StyledButton>
      )}
    </StyledCartItem>
  );
};

export default CardItem;
