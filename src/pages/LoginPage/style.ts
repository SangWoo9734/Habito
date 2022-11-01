import styled from "styled-components";

import * as variable from "@/assets/styleVariables";

export const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 80%;
  margin: auto;
  padding: 10%;
  border-radius: 20px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  background: white;
`;

export const LoginLogo = styled.div`
  width: 80%;
  margin: auto;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 40px auto;

  & input {
    height: 40px;
    margin-bottom: 10px;
    padding: 5px 10px;
    border: 3px solid ${variable.MAIN_GRAY};
    border-radius: 10px;

    font-size: 1.6rem;
    outline: none;
  }

  & input:focus {
    border-color: ${variable.FIRST_COLOR};
  }
`;

export const LoginButtonGroup = styled.div`
  width: 80%;
  margin: auto;

  & p {
    font-size: 1.3rem;
    margin-bottom: 5px;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
  }
`;
