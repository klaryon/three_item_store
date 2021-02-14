import styled from "styled-components"
import Colors from "../../theme/Colors"

export const StyledShop = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Heading = styled.h1`
    background-color: none;
`;
export const StyledCartItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
`;
export const StyledCartLine = styled.div`
    background-color: none;
`;
export const StyledPrice = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${Colors.white};
    height: 18rem;
    width: 14rem;
    margin-left: 1.7rem;
    margin-right: 1.7rem;
    border: 1px solid ${Colors.black};
    border-radius: 0rem 0rem 2rem 2rem;
    box-shadow: 2rem 2rem ${Colors.black};
`;
export const StyledPriceItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`;
export const Title = styled.small`
    color: ${Colors.black};
    padding-bottom: 0.4rem;
`;
export const OriginalPrice = styled.div`
    display:flex;
    justify-content: flex-end;
    padding-bottom: 0.6rem;
    font-size: 1.2rem;
`;
export const Discounts = styled.div`
    display:flex;
    justify-content: flex-end;
    padding-bottom: 0.6rem;
    color: ${Colors.salmon};
    font-size: 1.2rem;
`;
export const TotalPrice = styled.div`
    display:flex;
    justify-content: flex-end;
   padding-bottom: 1rem;
   font-weight: bold;
   font-size: 1.5rem;
`;
export const StyledCheckout = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
`;
export const Checkout = styled.button`
    background-color: rgba(${Colors.leafRgb},0.1);
    color:${Colors.leaf};
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
        background-color: rgba(${Colors.leafRgb},0.2);
        color:${Colors.leaf};
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

