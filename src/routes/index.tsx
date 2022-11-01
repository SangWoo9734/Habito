import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import HabitPage from "@/pages/HabitPage";

const ProjectRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="habit/*" element={<HabitPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProjectRoute;
