import React, { useState} from "react"
import { StyledCartItem, StyledCardBody, Name, Price, SmallParagraph, StyledQuantitySelector, StyledButton, Button, Unit } from "./styles"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import formatterNumber from "../../../helpers/utils"

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
        handleAddCart(item.id, item.name, item.price, item.unitdiscount, count)
        localStorage.setItem(item.id, count)
    }

    return ( 
        <StyledCartItem>
            <img src={item.image} alt={item.name}/>
            <StyledCardBody>
                <Name>{item.name}</Name>
                <Price>{formatterNumber(item.price)} <Unit>per unit</Unit></Price>
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