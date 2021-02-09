import React from "react"
import { StyledCartItem, StyledCardBody, Name, Price, SmallParagraph, StyledQuantitySelector } from "./styles"
import QuantitySelector from "../QuantitySelector/QuantitySelector"

const CardItem = ({data}) => {
    const cardItem = data.map((data,id) => (
            <StyledCartItem key={id}>
                <img src={data.image} alt={data.name}/>
                <StyledCardBody>
                    <Name>{data.name}</Name>
                    <Price>€ {data.price}</Price>
                    <SmallParagraph>{data.description}</SmallParagraph>
                </StyledCardBody>
                <StyledQuantitySelector>
                    <QuantitySelector />
                </StyledQuantitySelector>
            </StyledCartItem>
        )
    )

    return (
        <>
            {cardItem}
        </>
    )
}

export default CardItem;