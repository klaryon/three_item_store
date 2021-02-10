import React, {useState} from "react"
import { StyledCartItem, StyledCardBody, Name, Price, SmallParagraph, StyledQuantitySelector } from "./styles"
import QuantitySelector from "../QuantitySelector/QuantitySelector"

const CardItem = ({item, onSelectedItem}) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => { 
        if(count > 0) {
        setCount(prevCount => prevCount - 1)}
    }

    console.log(count)

    const handleChange = () => {
        onSelectedItem(item, count)
        console.log(count)
    }

    return (
        // <StyledCartItem onChange={() => onSelectedItem(data, count) }>     
        <StyledCartItem onChange={handleChange}>
            <img src={item.image} alt={item.name}/>
            <StyledCardBody>
                <Name>{item.name}</Name>
                <Price>€ {item.price}</Price>
                <SmallParagraph>{item.description}</SmallParagraph>
            </StyledCardBody>
            <StyledQuantitySelector>
                <QuantitySelector count={count} increment={increment} decrement={decrement}/>
            </StyledQuantitySelector>
        </StyledCartItem>
    )
}

export default CardItem;