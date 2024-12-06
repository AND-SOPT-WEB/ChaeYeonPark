import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  MyContentInputWrapper,
  MyContentLabelStyle,
  MyContentLayout,
  MyContentTitleStyle,
} from "../MyPage.style";
import updateUser from "../../../apis/updateUser";
import { MyUserInfoType } from "../../../types/myType";

const MyPageInfo = () => {
  const [hobby, setHobby] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeHobbyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHobby(value);
  };

  const handleChangePasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleClickEditButton = async () => {
    if (hobby || password) {
      const userInfo: Partial<MyUserInfoType> = {};

      if (hobby) {
        userInfo.hobby = hobby;
      }

      if (password) {
        userInfo.password = password;
      }

      try {
        await updateUser(userInfo);
        alert("프로필이 성공적으로 업데이트되었습니다.");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("변경할 사항을 입력해주세요.");
    }
  };

  return (
    <div css={MyContentLayout}>
      <h1 css={MyContentTitleStyle}>내 정보 수정하기</h1>
      <div css={MyContentInputWrapper}>
        <span css={MyContentLabelStyle}>새 비밀번호</span>
        <Input
          value={password}
          onChange={(e) => handleChangePasswordInput(e)}
        />

        <span css={MyContentLabelStyle}> 새 취미</span>
        <Input value={hobby} onChange={(e) => handleChangeHobbyInput(e)} />
      </div>
      <Button
        variant="myPage"
        onClick={handleClickEditButton}
      >
        수정하기
      </Button>
    </div>
  );
};

export default MyPageInfo;
