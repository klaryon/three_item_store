import React from "react"
import { StyledCounter, Input, Button } from "./styles"

const QuantitySelector = ({count, increment, decrement, handleChange}) => {
    return (
        <StyledCounter>
            <Button onClick={decrement}>-</Button>
            <Input onChange={handleChange} value={isNaN(count) ? '' : count} />
            <Button onClick={increment}>+</Button>
        </StyledCounter>
    )
}

export default QuantitySelector;

//https://stackoverflow.com/questions/59446110/how-to-handle-nan-in-controlled-input-element-with-value-of-type-number