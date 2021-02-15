import styled from "styled-components"
import Colors from "../../../theme/Colors"
import device from "../../../helpers/responsive"

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Children = styled.div`
    max-height: 100%;
    max-width: 100%;
    padding-top: 2.5rem;
    padding-bottom: 4rem;
    background-color: ${Colors.beige};

    @media ${device.laptop} {
        padding-bottom: 4rem;
        height: 23rem;
    }
`;