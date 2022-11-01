import React from "react";
import { Route, Routes } from "react-router-dom";

import HabitLog from "../HabitLog";
import HabitPlan from "../HabitPlan/HabitPlan";

const HabitContent = () => {
  return (
    <div className="right">
      <Routes>
        <Route path="/log" element={<HabitLog />} />
        <Route path="/plan" element={<HabitPlan />} />
      </Routes>
    </div>
  );
};

export default HabitContent;
