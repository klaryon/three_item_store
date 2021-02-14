import styled from "styled-components";
import Colors from "../../../theme/Colors"

export const StyledCartItem = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${Colors.white};
    height: 21.5rem;
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
    padding-bottom: 0.15rem;
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
export const StyledButton = styled.small`
    display:flex;
    justify-content:center;
`;
export const Button = styled.button`
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
export const Unit = styled.small`
    font-weight: normal;
    font-style: italic;
`;