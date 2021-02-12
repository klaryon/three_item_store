import React from "react";
import Body from "../../components/layout/Body/Body";
import CartLine from "../../components/units/CartLine/CartLine"
import {StyledShop, StyledCartLine, Heading, StyledCartItems, StyledPrice, OriginalPrice, Discounts, TotalPrice} from "./styles"

const Shop = ({cart, totalItems, originalPrice}) => {

    const cartLine = cart.map((item) => (
        <CartLine item={item} key={item.id} />
        )
    )
    return (
        <Body totalItems={totalItems}>
            <StyledShop> 
                <StyledCartItems>
                    <Heading>Cart</Heading>
                    <StyledCartLine>
                        {cartLine}
                    </StyledCartLine>
                </StyledCartItems>
                <StyledPrice>
                    <OriginalPrice>Total Original Price: {originalPrice}</OriginalPrice>
                    <Discounts>Discounts: {""}</Discounts>
                    <TotalPrice>Total Price: {""}</TotalPrice>
                </StyledPrice>
            </StyledShop>
        </Body>
    )
}

export default Shop;