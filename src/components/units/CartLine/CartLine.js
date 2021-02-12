import React from "react"
// import { } from "./styles"

const CartLine = ({item}) => {
    return(
        <div>
            {item.count}
            {item.id}
            {item.name}
            {item.price}
        </div>
    )
}

export default CartLine;