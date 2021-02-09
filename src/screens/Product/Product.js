import React from "react";
import Body from "../../components/layout/Body/Body";
import { StyledProduct } from "./styles"
import CardItem from "../../components/units/CardItem/CardItem"

const Product = () => {
    return (
        <Body>
            <StyledProduct>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </StyledProduct>
        </Body>
    )
}

export default Product;