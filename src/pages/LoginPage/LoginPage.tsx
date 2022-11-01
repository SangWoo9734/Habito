import React from "react";
import logo from "@/assets/img/logo.png";

import * as S from "./style";
import { SECOND_COLOR } from "@/assets/styleVariables";

import Button from "@/components/Button";

const LoginPage = () => {
  return (
    <S.LoginPageLayout>
      <S.LoginLogo>
        <img src={logo} alt="habito-logo" />
      </S.LoginLogo>
      <S.LoginForm>
        <input type="text" placeholder="Email..." autoFocus />
        <input type="password" placeholder="Password..." />
        <Button content="Login" />
      </S.LoginForm>
      <S.LoginButtonGroup>
        <p>소셜 로그인</p>
        <div>
          <Button content="Google" color={SECOND_COLOR} />
          <Button content="Kakao" color={SECOND_COLOR} />
          <Button content="Github" color={SECOND_COLOR} />
        </div>
      </S.LoginButtonGroup>
    </S.LoginPageLayout>
  );
};

export default LoginPage;
