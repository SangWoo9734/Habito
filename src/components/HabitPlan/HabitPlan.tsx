import React, { useState } from "react";

import * as S from "./style";

import HabitNoPlan from "./HabitNoPlan";
import HabitOngoingPlan from "./HabitOngoingPlan";

const HabitPlan = () => {
  const [plan, setPlan] = useState({
    title: "미라클 모닝",
    randomHabit: {
      status: true,
      habit: [{ title: "물 한 잔 마시기" }],
    },
    userHabit: [
      { title: "오전 6시 기상" },
      { title: "개발 아티클 1편 읽기" },
      { title: "버스 정류장 내려서 읽기" },
    ],
    todayOneLine: "",
  });

  if (!plan) return <HabitNoPlan />;

  return <HabitOngoingPlan />;
};

export default HabitPlan;
