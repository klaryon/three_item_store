import styled from "styled-components";
import Colors from "../../../theme/Colors";
import device from "../../../helpers/responsive";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0rem 8rem 0rem 8rem;
  }
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
  display: flex;
  justify-content: center;
  font-style: italic;
  margin: 1.5rem 3rem 2rem 3rem;
  text-align: justify;
  text-justify: inter-word;

  @media ${device.laptop} {
    margin: 0rem 8rem 2rem 8rem;
    justify-content: flex-start;
  }
`;
export const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const ItemLogo = styled.p`
  font-weight: bold;
  margin: 0rem;
`;
export const ItemLogoText = styled.p`
  text-align: center;
  margin: 0.5rem 0rem 0rem 1rem;
  font-size: 2rem;

  @media ${device.laptop} {
    margin: 0rem 0rem 0rem 1rem;
  }
`;
