import React from "react";
import Button from "../Button";

import * as S from "./style";

const HabitNoPlan = () => {
  return (
    <S.HabitNoPlanWrapper>
      <p>현재 진행 중인 스케줄이 없습니다!</p>
      <Button content="습관 스케줄 만들기" />
    </S.HabitNoPlanWrapper>
  );
};

export default HabitNoPlan;
