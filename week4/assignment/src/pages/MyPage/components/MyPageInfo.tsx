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

const MyPageInfo = () => {
  const [value, setValue] = useState({
    PASSWORD: "",
    HOBBY: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "PASSWORD" | "HOBBY"
  ) => {
    const value = e.target.value;
    setValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleClickButton = async () => {
    try {
      const response = await updateUser(value.PASSWORD, value.HOBBY);
      console.log("User updated successfully:", response);
      alert("프로필이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div css={MyContentLayout}>
      <h1 css={MyContentTitleStyle}>내 정보 수정하기</h1>
      <div css={MyContentInputWrapper}>
        <span css={MyContentLabelStyle}>새 비밀번호</span>
        <Input
          value={value.PASSWORD}
          onChange={(e) => handleInputChange(e, "PASSWORD")}
        />

        <span css={MyContentLabelStyle}> 새 취미</span>
        <Input
          value={value.HOBBY}
          onChange={(e) => handleInputChange(e, "HOBBY")}
        />
      </div>
      <Button variant="myPage" onClick={handleClickButton}>
        수정하기
      </Button>
    </div>
  );
};

export default MyPageInfo;
