import styled from "styled-components";
import Colors from "../../../theme/Colors";

export const StyledCounter = styled.div`
  display: flex;
`;
export const Input = styled.input`
  color: ${Colors.leaf};
  font-weight: bold;
  width: 3rem;
  height: 2.5rem;
  margin-right: 0.3rem;
  margin-left: 0.3rem;
  text-align: center;
  border: none;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${Colors.leaf};
  }
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
    background-color: rgba(${Colors.beigeRgb}, 0.7);
  }
`;
