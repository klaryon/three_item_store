import styled from "styled-components";
import Colors from "../../../theme/Colors"

export const StyledCounter = styled.div`
    display:flex;
`;
export const Paragraph = styled.p`
    color: ${Colors.leaf};
    font-weight: bold;
    width: 3.5rem;
    text-align: center;
`;
export const Button = styled.button`
    color: ${Colors.leaf};
    background-color: ${Colors.beige};
    width: 3rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px ${Colors.leaf};
    }

    &:hover {
        background-color: rgb(${Colors.leafRgb},0.1);
    }
`;