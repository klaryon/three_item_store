import React from "react"; 
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import StyledBody from "./styles"

const Body = ({children}) => {
    return (
        <StyledBody>
            <Header />
            {children}
            <Footer />
        </StyledBody>
    )
}

export default Body;