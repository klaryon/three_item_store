import styled from "styled-components";
import Colors from "../../../theme/Colors"

export const StyledCartItem = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${Colors.white};
    height: 19rem;
    width: 14rem;
    margin-left: 1.7rem;
    margin-right: 1.7rem;
    border: 1px solid ${Colors.black};
    border-radius: 0rem 0rem 2rem 2rem;
    box-shadow: 2rem 2rem ${Colors.black};
`;
export const StyledCardBody = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
    height:5rem;

    & > p {
        margin: 0rem;
    }
`;
export const Name = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
`;
export const Price = styled.p`
    font-weight: bold;
    color: ${Colors.leaf};
`;
export const SmallParagraph = styled.small`
    font-style: italic;
    display:flex;
    flex-wrap: wrap;
`;
export const StyledQuantitySelector = styled.small`
    display:flex;
    justify-content:center;
    margin-top: 0.7rem;
`;