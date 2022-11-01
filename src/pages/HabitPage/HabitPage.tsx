import React from "react";

import * as S from "./style";

import HabitNav from "@/components/HabitNav";
import HabitContent from "@/components/HabitContent";

const HabitPage = () => {
  return (
    <S.HabitPageLayout>
      <HabitNav />
      <HabitContent />
    </S.HabitPageLayout>
  );
};

export default HabitPage;
