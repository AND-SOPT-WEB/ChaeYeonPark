import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const MyPage = () => {
  return (
    <div>
      <Button variant="myPage">로그인</Button>
      <Button variant="authPage">로그인</Button>
      <Input
        value=""
        onChange={() => {}}
        placeholder="입력하세요."
        isError={true}
        errorMessage="하하"
      />
    </div>
  );
};

export default MyPage;
