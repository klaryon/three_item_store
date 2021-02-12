import React from "react"; 
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { StyledBody, Children } from "./styles"

const Body = ({children, totalItems}) => {
    return (
        <StyledBody>
            <Header totalItems={totalItems}/>
            <Children>{children}</Children>
            <Footer />
        </StyledBody>
    )
}

export default Body;