import React from "react";
import { Link } from "react-router-dom"
import { StyledHeader, StyledLink, StyledParagraph }from "./styles"
import Cart from "../../units/Cart/Cart"

const Header = () => {
    return (
        <>
            <StyledHeader>
                <h1>🍵🍓☕ 3 item store</h1>
                <StyledLink>
                    <Link to="/">Products</Link>
                    <Link to="/shop">Shop<Cart/></Link>
                </StyledLink>
            </StyledHeader>
            <StyledParagraph>
                This is a store of only 3 items... hope you don't get lost. All inspiration is from our C*X's tastes and special rewards!
            </StyledParagraph>
        </>
    )
}

export default Header;