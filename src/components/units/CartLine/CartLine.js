import React from "react"
// import { } from "./styles"
import formatterNumber from "../../../helpers/utils"

const CartLine = ({item}) => {
    return(
        <div>
            {item.count}
            {item.id}
            {item.name}
            {formatterNumber(item.price)}
        </div>
    )
}

export default CartLine;