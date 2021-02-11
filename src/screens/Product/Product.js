import React from "react";
import Body from "../../components/layout/Body/Body";
import { StyledProduct } from "./styles"
import CardItem from "../../components/units/CardItem/CardItem"
// import data from "../../shared/data"

const Product = ({items, handleAddCart}) => {
    const cardItem = items.map((item) => (
            <CardItem item={item} key={item.id} handleAddCart={handleAddCart}/>
        )
    )

    return (
        <Body>
            <StyledProduct>
                {cardItem}
            </StyledProduct>
        </Body>
    )
}

export default Product;