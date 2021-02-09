import styled from "styled-components";
import Colors from "../../../theme/Colors"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 1.5rem;
`;
export const StyledLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12rem;
    
    & > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${Colors.black};
    }

    & > a:hover {
        color: ${Colors.leaf};
    }
`;
export const StyledParagraph = styled.p`
    font-style: italic;
    padding-left: 4rem;
    padding-top: 0rem;
    padding-bottom: 0.5rem;
`;
export const Logo = styled.h1`
    font-weight: bold;
`;