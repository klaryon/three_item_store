import React from "react"
import { StyledCart, StyledCartNumber } from "./styles"

const Cart = ({cart}) => {
    return(
        <StyledCart>🛒<StyledCartNumber>({cart})</StyledCartNumber></StyledCart>
    )
}

export default Cart;