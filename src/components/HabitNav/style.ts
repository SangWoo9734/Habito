import styled from "styled-components";

import * as variable from "@/assets/styleVariables";

// Habit Nav
export const NavOuterWrapper = styled.div``;

export const NavInnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin: auto;
`;

// Habit User Profile
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  border: 3px solid ${variable.FIRST_COLOR};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }

  & div {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 30%;
    padding: 10px;
    border-radius: 0 0 50% 50%;
    background: #00000050;
    text-align: center;
    font-size: 1.5rem;
    color: lightgray;
    visibility: hidden;
    cursor: pointer;
  }

  &:hover {
    & div {
      visibility: visible;
    }
  }
`;
export const ProfileName = styled.p`
  margin: 10px 0;
  font-size: 2rem;
  font-weight: bold;
`;
export const ProfileContent = styled.p`
  font-size: 1.5rem;
  & span {
    font-weight: bold;
    color: ${variable.FIRST_COLOR};
  }
`;

// User Manu
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserMenuUnit = styled.button`
  width: 200px;
  margin: 10px auto;
  padding: 10px;
  border: 2px solid ${variable.FIRST_COLOR};
  border-radius: 10px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  font-size: 1.5rem;
  color: ${variable.FIRST_COLOR};

  &:hover {
    background: ${variable.FIRST_COLOR};
    color: white;
  }
  & svg {
    margin: 5px auto;
    font-size: 2.3rem;
  }
`;
