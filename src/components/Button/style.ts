import styled from "styled-components";

import * as variable from "../../assets/styleVariables";

export const ButtonComp = styled.button<{ color?: string }>`
  width: 100%;
  padding: 10px 20px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  background: ${({ color }) => (color ? color : variable.FIRST_COLOR)};
  font-size: 1.3rem;
  color: white;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
  &:active {
    background: ${variable.SECOND_COLOR};
  }
`;
