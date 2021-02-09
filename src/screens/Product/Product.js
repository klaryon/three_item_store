import React from "react";
import Body from "../../components/layout/Body/Body";
import { StyledProduct } from "./styles"
import CardItem from "../../components/units/CardItem/CardItem"
import data from "../../shared/data"

const Product = () => {
    return (
        <Body>
            <StyledProduct>
                <CardItem data={data}/>
            </StyledProduct>
        </Body>
    )
}

export default Product;