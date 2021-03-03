import React from "react";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledLink,
  StyledParagraph,
  Logo,
  ItemLogo,
  ItemLogoText,
} from "./styles";
import Cart from "../../units/Cart/Cart";

const Header = ({ totalItems }) => {
  return (
    <>
      <StyledHeader>
        <Logo>
          <ItemLogo>🍵🍓☕</ItemLogo>
          <ItemLogoText>3 item store</ItemLogoText>
        </Logo>
        <StyledLink>
          <Link to="/">Products</Link>
          <Link to="/shop">
            Cart
            <Cart totalItems={totalItems} />
          </Link>
        </StyledLink>
      </StyledHeader>
      <StyledParagraph>
        This is a store of only 3 items... hope you don't get lost. All
        inspiration is from our C*X's tastes and special rewards!
      </StyledParagraph>
    </>
  );
};

export default Header;
