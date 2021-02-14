import React from "react";
import Body from "../../components/layout/Body/Body";
import CartLine from "../../components/units/CartLine/CartLine"
import {StyledShop, StyledCartLine, Heading, StyledCartItems, StyledPrice, OriginalPrice, Discounts, TotalPrice} from "./styles"
import formatterNumber from "../../helpers/utils"

const Shop = ({cart, totalItems, originalPrice, discount, totalPrice}) => {

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
                    <OriginalPrice>Total Original Price: {formatterNumber(originalPrice.toFixed(2))}</OriginalPrice>
                    <Discounts>Discounts: {formatterNumber(discount.toFixed(2))}</Discounts>
                    <TotalPrice>Total Price: {formatterNumber(totalPrice.toFixed(2))}</TotalPrice>
                </StyledPrice>
            </StyledShop>
        </Body>
    )
}

export default Shop;