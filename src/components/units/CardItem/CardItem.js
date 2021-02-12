import React, { useState, useEffect } from "react"
import { StyledCartItem, StyledCardBody, Name, Price, SmallParagraph, StyledQuantitySelector, StyledButton, Button } from "./styles"
import QuantitySelector from "../QuantitySelector/QuantitySelector"

const CardItem = ({item, handleAddCart}) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => { 
        if(count > 0) {
        setCount(prevCount => prevCount - 1)}
    }

    const handleChange = (e) => {
        setCount(parseInt(e.target.value))
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleAddCart(item.id, item.name, item.price, count)
    }

    return ( 
        <StyledCartItem>
            <img src={item.image} alt={item.name}/>
            <StyledCardBody>
                <Name>{item.name}</Name>
                <Price>€ {item.price}</Price>
                <SmallParagraph>{item.description}</SmallParagraph>
            </StyledCardBody>
            <StyledQuantitySelector>
                <QuantitySelector count={count} handleChange={(e) => handleChange(e)} increment={increment} decrement={decrement}/>
            </StyledQuantitySelector>
            <StyledButton>
                <Button onClick={handleClick}>Add to Cart</Button>
            </StyledButton>
        </StyledCartItem>
    )
}

export default CardItem;