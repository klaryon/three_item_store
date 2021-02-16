import React, { useEffect, useState } from "react";
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

const CardItem = ({ item, handleAddCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleChange = (e) => {
    setCount(parseInt(e.target.value));
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAddCart(
      item.id,
      item.name,
      item.price,
      item.image,
      item.unitdiscount,
      count
    );
    localStorage.setItem(item.id, count);
  };

  useEffect(() => {
    if (item.id === "GR1") {
      const store = localStorage.getItem("GR1");
      const storeInt = JSON.parse(store);
      console.log(storeInt);
      setCount(storeInt);
    } else if (item.id === "SR1") {
      const store = localStorage.getItem("SR1");
      const storeInt = JSON.parse(store);
      console.log(storeInt);
      setCount(storeInt);
    } else if (item.id === "CF1") {
      const store = localStorage.getItem("CF1");
      const storeInt = JSON.parse(store);
      console.log(storeInt);
      setCount(storeInt);
    }
  }, []);

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
      <StyledQuantitySelector>
        <QuantitySelector
          count={count}
          handleChange={(e) => handleChange(e)}
          increment={increment}
          decrement={decrement}
        />
      </StyledQuantitySelector>
      <StyledButton>
        <Button onClick={handleClick}>Add to Cart</Button>
      </StyledButton>
    </StyledCartItem>
  );
};

export default CardItem;
