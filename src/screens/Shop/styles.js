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
export const OriginalPrice = styled.div`
    background-color: none;
`;
export const Discounts = styled.div`
    background-color: none;
`;
export const TotalPrice = styled.div`
    background-color: none;
`;
