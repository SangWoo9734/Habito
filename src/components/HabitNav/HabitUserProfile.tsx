import React, { useRef, useState } from "react";

import * as S from "./style";

interface Props {
  imgUrl: string;
  name: string;
  successCount: number;
}

const UserProfile = ({ name, imgUrl, successCount }: Props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState(imgUrl);
  return (
    <S.ProfileWrapper>
      <S.ProfileImage>
        <img src={imgSrc} alt="user-thumbnail" />
        <div
          onClick={() => {
            imageInput.current && imageInput.current.click();
          }}
        >
          Edit
        </div>
        <input
          ref={imageInput}
          type="file"
          onChange={(event) => {
            if (event.target.files) setImgSrc(event.target.value);
          }}
        />
      </S.ProfileImage>
      <S.ProfileName>{name}</S.ProfileName>
      <S.ProfileContent>
        <span>{successCount}</span>개의 습관을 형성했습니다!
      </S.ProfileContent>
    </S.ProfileWrapper>
  );
};

export default UserProfile;
