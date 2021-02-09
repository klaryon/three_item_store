import React from "react"
import { StyledCounter, Paragraph, Button } from "./styles"

const QuantitySelector = () => {
    return (
        <StyledCounter>
            <Button>-</Button>  
            <Paragraph>1</Paragraph>
            <Button>+</Button>
        </StyledCounter>
    )
}

export default QuantitySelector;