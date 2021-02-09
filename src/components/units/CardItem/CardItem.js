import React from "react"
import { StyledCartItem, StyledCardBody, Name, Price, SmallParagraph, StyledQuantitySelector } from "./styles"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import data from "../../../shared/data"

const CardItem = () => {
    return (
        <StyledCartItem>
            <img src={data[2].image} alt={data.name}/>
            <StyledCardBody>
                <Name>{data[2].name}</Name>
                <Price>€ {data[2].price}</Price>
                <SmallParagraph>{data[2].description}</SmallParagraph>
                {/* <QuantitySelector /> */}
            </StyledCardBody>
            <StyledQuantitySelector>
                <QuantitySelector />
            </StyledQuantitySelector>
        </StyledCartItem>
    )
}

export default CardItem;