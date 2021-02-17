import styled from "styled-components";
import Colors from "../../../theme/Colors";
import device from "../../../helpers/responsive";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  height: 21.5rem;
  width: 14rem;
  margin: 1rem 3rem 3rem 3rem;
  border: 1px solid ${Colors.black};
  border-radius: 0rem 0rem 2rem 2rem;
  box-shadow: 1rem 1rem ${Colors.black};

  @media ${device.mobileS} {
    box-shadow: 2rem 2rem ${Colors.black};
  }

  @media ${device.laptop} {
    margin: 0rem 1.7rem 0rem 1.7rem;
  }
`;
export const StyledCardBody = styled.div`
  margin: 0.5rem 1rem 0rem 1rem;
  height: 6.5rem;

  & > p {
    margin: 0rem;
  }
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
`;
export const Price = styled.p`
  font-weight: bold;
  color: ${Colors.leaf};
  padding-bottom: 0.5rem;
`;
export const SmallParagraph = styled.small`
  font-style: italic;
  display: flex;
  flex-wrap: wrap;
`;
export const StyledQuantitySelector = styled.small`
  display: flex;
  justify-content: center;
  margin-top: 0.7rem;
`;
export const StyledButton = styled.small`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: rgba(${Colors.leafRgb}, 0.1);
  color: ${Colors.leaf};
  font-weight: bold;
  margin-top: 1rem;
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  height: 2.5rem;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.leaf};
  }

  &:hover {
    background-color: rgba(${Colors.leafRgb}, 0.2);
    color: ${Colors.leaf};
  }
`;
export const Unit = styled.small`
  font-weight: normal;
  font-style: italic;
`;
