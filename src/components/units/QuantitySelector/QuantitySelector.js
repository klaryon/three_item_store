import React, {useState} from "react"
import { StyledCounter, Paragraph, Button } from "./styles"

const QuantitySelector = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => { 
        if(count > 0) {
        setCount(prevCount => prevCount - 1)}
    }

    return (
        <StyledCounter>
            <Button onClick={decrement}>-</Button>  
            <Paragraph>{count}</Paragraph>
            <Button onClick={increment}>+</Button>
        </StyledCounter>
    )
}

export default QuantitySelector;