import React, { useState } from "react";

import * as S from "./style";

interface HabitType {
  title: string;
}

interface RandomHabitType {
  status: boolean;
  habit: HabitType;
}

interface Props {
  title: string;
  randomHabit: RandomHabitType;
  userHabit: HabitType[];
  todayOneLine: string;
}

const HabitOngoingPlan = () => {
  return (
    <div>
      <div>dsfadf</div>
    </div>
  );
};

export default HabitOngoingPlan;
