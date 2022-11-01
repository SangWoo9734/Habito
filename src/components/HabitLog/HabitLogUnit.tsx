import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";

import * as S from "./style";

interface Props {
  title: string;
  habits: number;
  days: number;
  active: boolean;
}

const HabitLogUnit = ({ title, habits, days, active }: Props) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    setProgressPercentage(parseInt(((days / 21) * 100).toFixed(0)));
  }, []);

  return (
    <S.HabitLogUnitWrapper active={active}>
      <p className="unit-title">{title}</p>
      <p className="unit-habit">
        <span>{habits}</span> 개의 습관을 형성하고 있습니다.
      </p>
      <S.HabitLogUnitProgress percentage={progressPercentage} active={active}>
        <div />
        <span>{progressPercentage}% 완료</span>
      </S.HabitLogUnitProgress>
      <S.HabitLogUnitEditButton>
        <BiEdit />
      </S.HabitLogUnitEditButton>
    </S.HabitLogUnitWrapper>
  );
};

export default HabitLogUnit;
