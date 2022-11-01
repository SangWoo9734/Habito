import styled from "styled-components";

import * as variable from "@/assets/styleVariables";

// Habit No Plan
export const HabitNoPlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 80%;
  height: 200px;
  padding: 5%;
  border: 2px solid ${variable.FIRST_COLOR};
  border-radius: 20px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  text-align: center;

  & p {
    font-size: 2rem;
    font-weight: bold;
  }
`;
