import React from "react";
import Body from "../../components/layout/Body/Body";
import CartLine from "../../components/units/CartLine/CartLine"
import StyledShop from "./styles"

const Shop = ({cart}) => {

    const cartLine = cart.map((item) => (
        <CartLine item={item} key={item.id} />
        )
    )
    return (
        <Body >
            <StyledShop > 
                <h1>Quantities first try!</h1>
                {cartLine}
            </StyledShop>
        </Body>
    )
}

export default Shop;