import styled from "styled-components";
import Colors from "../../../theme/Colors"

export const StyledCartLine = styled.div`
    display:flex;
    height: 5rem;
    margin-bottom: 1.1rem;
`;
export const StyledName = styled.div`
    width: 16.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
`;
export const StyledInfoItem = styled.div`
    padding-left: 1.2rem;
`;
export const InfoSmall = styled.small`
    height: 5rem;
    margin-top: 0rem;
    letter-spacing: 0.1rem;
`;
export const InfoSmall2 = styled.small`
    height: 5rem;
    margin-top: 0rem;
    letter-spacing: 0.1rem;
    margin-left: 1.5rem;
`;
export const StyledQuantity = styled.div`
    letter-spacing: 0.2rem;
`;
export const StyledDiscounts = styled.div`
    letter-spacing: 0.1rem;
    color: ${Colors.salmon};
    font-size: 0.8rem;
`;

