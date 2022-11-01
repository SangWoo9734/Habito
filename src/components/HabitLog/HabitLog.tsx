import React from "react";
import HabitLogUnit from "./HabitLogUnit";

import * as S from "./style";

const HabitLog = () => {
  const mookData = [
    {
      title: "미라클 모닝",
      habits: 3,
      days: 5,
      active: true,
    },
    {
      title: "미라클 모닝",
      habits: 3,
      days: 5,
      active: false,
    },
  ];
  return (
    <div className="right">
      <S.HabitLogNotice>
        <span>{mookData.length}</span> 개의 습관 스케줄을 생성했습니다.
      </S.HabitLogNotice>
      <S.HabitLogList>
        {mookData.map((habit, index) => (
          <HabitLogUnit key={index} {...habit} />
        ))}
      </S.HabitLogList>
    </div>
  );
};

export default HabitLog;
