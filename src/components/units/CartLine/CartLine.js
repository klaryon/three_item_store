import React from "react"
import {StyledCartLine, StyledName, StyledInfoItem, InfoSmall, InfoSmall2, StyledQuantity, StyledDiscounts} from "./styles"
import formatterNumber from "../../../helpers/utils"

const CartLine = ({item}) => {
    return(
        <StyledCartLine>
            <img src={item.image} alt={item.name}/>
            <StyledInfoItem>
                <StyledName>
                    {item.name}
                </StyledName>
                <InfoSmall>id: {item.id}</InfoSmall>
                <InfoSmall2>Price unit: {formatterNumber(item.price)}</InfoSmall2>
                <StyledDiscounts>discounts: -{formatterNumber(item.discount)}</StyledDiscounts>
            </StyledInfoItem>
            <StyledQuantity>
                Qty:{item.count}
            </StyledQuantity>
        </StyledCartLine>
    )
}

export default CartLine;