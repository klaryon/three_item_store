import React from "react"; 
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { StyledBody, Children } from "./styles"

const Body = ({children}) => {
    return (
        <StyledBody>
            <Header />
            <Children>{children}</Children>
            <Footer />
        </StyledBody>
    )
}

export default Body;