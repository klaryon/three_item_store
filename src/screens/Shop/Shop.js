import React from "react";
import Body from "../../components/layout/Body/Body";
import CartLine from "../../components/units/CartLine/CartLine";
import {
  StyledShop,
  StyledCartLines,
  Heading,
  StyledCartItems,
  StyledPrice,
  StyledPriceItems,
  OriginalPrice,
  Discounts,
  TotalPrice,
  StyledCheckout,
  Checkout,
  StyledClear,
  Title,
  EmptyCart,
} from "./styles";
import formatterNumber from "../../helpers/utils";

const Shop = ({
  cart,
  totalItems,
  originalPrice,
  totalDiscount,
  totalPrice,
  onAddCart,
  onRemoveCart,
  onClearCart,
}) => {
  const cartLine = cart.map((item) => (
    <CartLine
      key={item.id}
      item={item}
      onAddCart={onAddCart}
      onRemoveCart={onRemoveCart}
    />
  ));

  return (
    <Body totalItems={totalItems}>
      <StyledShop>
        <StyledCartItems>
          <Heading>Cart</Heading>
          {cart.length === 0 && <EmptyCart>Your Cart is Empty! 🥺</EmptyCart>}
          <StyledCartLines>{cartLine}</StyledCartLines>
        </StyledCartItems>
        <StyledPrice>
          <StyledPriceItems>
            <Title>Original total price:</Title>
            <OriginalPrice>
              {formatterNumber(originalPrice.toFixed(2))}
            </OriginalPrice>
            <Title>Discounts:</Title>
            <Discounts>-{formatterNumber(totalDiscount.toFixed(2))}</Discounts>
            <Title>Total Price:</Title>
            <TotalPrice>{formatterNumber(totalPrice.toFixed(2))}</TotalPrice>
            <StyledCheckout>
              <Checkout>Checkout</Checkout>
              <StyledClear onClick={onClearCart}>clear</StyledClear>
            </StyledCheckout>
          </StyledPriceItems>
        </StyledPrice>
      </StyledShop>
    </Body>
  );
};

export default Shop;
