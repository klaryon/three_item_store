import React from "react"
import { StyledCounter, Paragraph, Button } from "./styles"

const QuantitySelector = ({count, increment, decrement, onChange}) => {
    return (
        <StyledCounter>
            <Button onClick={decrement}>-</Button>
            <Paragraph>{count}</Paragraph>
            <Button onClick={increment}>+</Button>
        </StyledCounter>
    )
}

export default QuantitySelector;