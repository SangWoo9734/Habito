import React from "react";

import * as S from "./style";

interface Props {
  title: string;
  icons: JSX.Element;
  url: string;
}

const UserMenuUnit = ({ title, icons, url }: Props) => {
  return (
    <S.UserMenuUnit>
      {icons}
      <p>{title}</p>
    </S.UserMenuUnit>
  );
};

export default UserMenuUnit;
