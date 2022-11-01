import React from "react";
import Button from "../Button";

import * as S from "./style";

import UserManu from "./HabitManu";
import UserProfile from "./HabitUserProfile";

const HabitNav = () => {
  return (
    <S.NavOuterWrapper className="left">
      <S.NavInnerWrapper>
        <UserProfile
          name="park"
          imgUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          successCount={5}
        />
        <UserManu />
        <Button content={"Logout"} />
      </S.NavInnerWrapper>
    </S.NavOuterWrapper>
  );
};

export default HabitNav;
