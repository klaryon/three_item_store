import React from "react"; 
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { StyledBody, Children } from "./styles"

const Body = ({children, totalItems, handleTotalPrice}) => {
    return (
        <StyledBody>
            <Header totalItems={totalItems} handleTotalPrice={handleTotalPrice}/>
            <Children>{children}</Children>
            <Footer />
        </StyledBody>
    )
}

export default Body;