import React from "react";

import * as S from "./style";

interface ButtonProps {
  content: string;
  color?: string;
  onClick?: (arg: any) => void;
}

const Button = ({ content, ...props }: ButtonProps) => {
  return <S.ButtonComp {...props}>{content}</S.ButtonComp>;
};

export default Button;
