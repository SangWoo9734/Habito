import styled from "styled-components";

export const HabitPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 700px;

  & > div {
    background: #ffffff;
    position: relative;
    margin: 0 10px;
    padding: 30px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
  }

  @media screen and (max-width: 500px) {
    display: block;

    & .left {
      width: 100%;
    }

    & .right {
      width: 100%;
      background: lightblue;
    }
  }
`;
