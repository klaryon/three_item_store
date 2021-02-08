import React from "react";
import { Link } from "react-router-dom"
import StyledHeader from "./styles"

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">Products</Link>
            <Link to="/shop">Shop</Link>
        </StyledHeader>
    )
}

export default Header;