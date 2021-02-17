import styled from "styled-components";
import Colors from "../../../theme/Colors";
import device from "../../../helpers/responsive";

export const StyledCounter = styled.div`
  display: flex;
  height: 3rem;
  margin-top: 0.5rem;
`;
export const StyledQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.leaf};
  font-weight: bold;
  width: 3rem;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
  border: none;
`;
export const Button = styled.button`
  color: ${Colors.leaf};
  background-color: ${Colors.white};
  font-weight: bold;
  width: 3rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.leaf};
  }

  &:hover {
    background-color: rgba(${Colors.leafRgb}, 0.1);
  }
`;
