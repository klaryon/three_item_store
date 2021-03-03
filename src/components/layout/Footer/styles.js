import styled from "styled-components";
import Colors from "../../../theme/Colors";
import device from "../../../helpers/responsive";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1.9rem 0rem 1.1rem 0rem;
  font-size: 0.9rem;
  color: ${Colors.leaf};

  @media ${device.laptop} {
    justify-content: flex-end;
    margin: 2.2rem 8rem 0.5rem 8rem;
  }
`;
export default StyledFooter;
