import React from "react";
import Body from "../../components/layout/Body/Body";
import CartLine from "../../components/units/CartLine/CartLine"
import StyledShop from "./styles"

const Shop = ({cart}) => {

    const cartLine = cart.map((item) => (
        <CartLine item={item} key={item.item.id} />
    )
)
    return (
        <Body cart={cart} >
            <StyledShop>
                {cartLine}
                {cart}
            </StyledShop>
        </Body>
    )
}

export default Shop;