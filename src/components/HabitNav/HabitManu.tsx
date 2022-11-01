import React from "react";

import * as S from "./style";
import { FaRunning, FaClock } from "react-icons/fa";

import UserMenuUnit from "./HabitMenuUnit";

const UserManu = () => {
  const menus = [
    {
      title: "진행중인 습관 스케줄",
      icons: <FaRunning />,
      url: "",
    },
    { title: "습관 스케줄 돌아보기", icons: <FaClock />, url: "" },
  ];
  return (
    <S.MenuWrapper>
      {menus.map((menu, index) => {
        return <UserMenuUnit key={index} {...menu} />;
      })}
    </S.MenuWrapper>
  );
};

export default UserManu;
