import React from "react"
import { StyledCart, StyledCartNumber } from "./styles"

const Cart = ({totalItems}) => {
    return(
        <StyledCart>🛒<StyledCartNumber>({totalItems})</StyledCartNumber></StyledCart>
    )
}

export default Cart;