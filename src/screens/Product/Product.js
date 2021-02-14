import React from "react";
import Body from "../../components/layout/Body/Body";
import { StyledProduct } from "./styles"
import CardItem from "../../components/units/CardItem/CardItem"
// import data from "../../shared/data"

const Product = ({items, handleAddCart, totalItems, handleDiscount}) => {
    const cardItem = items.map((item) => (
            <CardItem item={item} key={item.id} handleAddCart={handleAddCart} handleDiscount={handleDiscount}/>
        )
    )

    return (
        <Body totalItems={totalItems}>
            <StyledProduct>
                {cardItem}
            </StyledProduct>
            <button onClick={handleDiscount}>Apply Discounts</button>
        </Body>
    )
}

export default Product;