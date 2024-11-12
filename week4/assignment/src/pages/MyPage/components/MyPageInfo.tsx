import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  MyContentInputWrapper,
  MyContentLabelStyle,
  MyContentLayout,
  MyContentTitleStyle,
} from "../MyPage.style";

const MyPageInfo = () => {
  return (
    <div css={MyContentLayout}>
      <h1 css={MyContentTitleStyle}>내 정보 수정하기</h1>
      <div css={MyContentInputWrapper}>
        <span css={MyContentLabelStyle}>새 비밀번호</span>
        <Input value="" onChange={() => {}} />

        <span css={MyContentLabelStyle}> 새 취미</span>
        <Input value="" onChange={() => {}} />
      </div>
      <Button variant="myPage">수정하기</Button>
    </div>
  );
};

export default MyPageInfo;
