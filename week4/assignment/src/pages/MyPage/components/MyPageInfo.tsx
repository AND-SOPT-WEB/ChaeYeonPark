import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  MyContentInputWrapper,
  MyContentLabelStyle,
  MyContentLayout,
  MyContentTitleStyle,
} from "../MyPage.style";

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
      <Button variant="myPage">수정하기</Button>
    </div>
  );
};

export default MyPageInfo;
