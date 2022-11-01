import styled from "styled-components";
import * as variable from "@/assets/styleVariables";

// Habit Log
export const HabitLogNotice = styled.p`
  font-size: 1.7rem;
  font-weight: bold;

  & span {
    color: ${variable.FIRST_COLOR};
  }
`;

export const HabitLogList = styled.div`
  height: 90%;
  overflow: auto;
`;

// Habit Log Unit
export const HabitLogUnitWrapper = styled.div<{ active: boolean }>`
  position: relative;
  margin: 15px 0;
  padding: 20px;
  border: 2px solid
    ${({ active }) => (active ? variable.FIRST_COLOR : variable.MAIN_GRAY)};
  border-radius: 20px;
  font-size: 1.5rem;
  color: ${({ active }) => (active ? "inherit" : variable.MAIN_GRAY)};

  & .unit-title {
    margin-bottom: 15px;
    font-size: 2.3rem;
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    background: #f9f9f9;
  }
`;

export const HabitLogUnitProgress = styled.div<{
  percentage: number;
  active: boolean;
}>`
  display: flex;
  align-items: center;

  & div {
    position: relative;
    width: 500px;
    height: 12px;
    margin-right: 15px;
    border-radius: 10px;
    background: ${variable.SUB_GRAY};

    &::before {
      content: " ";
      position: absolute;
      height: inherit;
      width: ${({ percentage }) => `${percentage}%`};
      border-radius: inherit;
      background: ${({ active }) =>
        active ? variable.FIRST_COLOR : variable.MAIN_GRAY};
    }
  }

  & span {
    color: ${({ active }) =>
      active ? variable.FIRST_COLOR : variable.MAIN_GRAY};
    font-weight: bold;
  }
`;

export const HabitLogUnitEditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px;
  border-radius: 3px;
  font-size: 2rem;

  &:hover {
    background: ${variable.SUB_GRAY};
  }
`;
