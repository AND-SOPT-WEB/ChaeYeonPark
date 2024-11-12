import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  MyContentInputWrapper,
  MyContentLabelStyle,
  MyContentLayout,
  MyContentTextStyle,
  MyContentTitleStyle,
} from "../MyPage.style";

const MyPageHobby = () => {
  const [userNumber, setUserNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value);
  };

  return (
    <div css={MyContentLayout}>
      <h1 css={MyContentTitleStyle}>취미</h1>

      <div css={MyContentInputWrapper}>
        <h2 css={MyContentLabelStyle}>나의 취미</h2>
        <span css={MyContentTextStyle}>취미내용</span>
        <h2 css={MyContentLabelStyle}>다른 사람들의 취미</h2>
        <Input
          value={userNumber}
          onChange={(e) => handleInputChange(e)}
          placeholder="사용자 번호"
        />
      </div>

      <Button variant="myPage">검색</Button>
    </div>
  );
};

export default MyPageHobby;
