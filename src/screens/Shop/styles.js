import styled from "styled-components";
import Colors from "../../theme/Colors";
import device from "../../helpers/responsive";

export const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const Heading = styled.h1`
  margin-top: 0.8rem; ;
`;
export const StyledCartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    height: 20rem;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 10rem;
  }
`;
export const StyledCartLines = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  height: 18rem;
  width: 14rem;
  margin: 2rem 0rem 0rem 0rem;
  border: 1px solid ${Colors.black};
  border-radius: 0rem 0rem 2rem 2rem;
  box-shadow: 1rem 1rem ${Colors.black};

  @media ${device.mobileS} {
    box-shadow: 2rem 2rem ${Colors.black};
  }
`;
export const StyledPriceItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
export const Title = styled.small`
  color: ${Colors.black};
  padding-bottom: 0.4rem;
  letter-spacing: 0.05rem;
`;
export const OriginalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.6rem;
  font-size: 1.2rem;
`;
export const Discounts = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.6rem;
  color: ${Colors.salmon};
  font-size: 1.2rem;
`;
export const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;
export const StyledCheckout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Checkout = styled.button`
  background-color: rgba(${Colors.leafRgb}, 0.1);
  color: ${Colors.leaf};
  font-weight: bold;
  margin-top: 0.4rem;
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  height: 2rem;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.leaf};
  }

  &:hover {
    background-color: rgba(${Colors.leafRgb}, 0.2);
    color: ${Colors.leaf};
  }
`;
export const StyledClear = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: ${Colors.leaf};
  margin-top: 0.3rem;

  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  &:hover {
    color: ${Colors.black};
  }
`;
export const EmptyCart = styled.div`
    font-size: 1.2rem;
    letter-spacing: 0.1rem;

    @media ${device.laptop} {
      font-size: 1.4rem;
  }
`;
