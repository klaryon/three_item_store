import styled from "styled-components";
import device from "../../../helpers/responsive";
import Colors from "../../../theme/Colors";

export const StyledCartLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;
  width: 10rem;

  @media ${device.laptop} {
    flex-direction: row;
    height: 5rem;
  }
`;
export const StyledName = styled.div`
  width: 16.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
`;
export const StyledInfoItem = styled.div`
  padding-left: 0rem;

  @media ${device.laptop} {
    padding-left: 1.2rem;
  }
`;
export const InfoSmall = styled.small`
  height: 5rem;
  margin-top: 0rem;
  letter-spacing: 0.03rem;

  @media ${device.laptop} {
    letter-spacing: 0.1rem;
  }
`;
export const InfoSmall2 = styled.small`
  height: 5rem;
  margin-top: 0rem;
  letter-spacing: 0.03rem;
  margin-left: 0.5rem;

  @media ${device.laptop} {
    margin-left: 1.5rem;
    letter-spacing: 0.1rem;
  }
`;
export const StyledDiscounts = styled.div`
  letter-spacing: 0.03rem;
  color: ${Colors.salmon};
  font-size: 0.9rem;

  @media ${device.laptop} {
    letter-spacing: 0.1rem;
  }
`;
