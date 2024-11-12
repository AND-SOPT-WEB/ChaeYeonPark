import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import {
  MyContentInputWrapper,
  MyContentLabelStyle,
  MyContentLayout,
  MyContentTextStyle,
  MyContentTitleStyle,
} from "../MyPage.style";
import getUserHobby from "../../../apis/getUserHobby";
import getUserHobbyByNo from "../../../apis/getUserHobbyByNo";

const MyPageHobby = () => {
  const [userHobby, setUserHobby] = useState();
  const [userNumber, setUserNumber] = useState("");
  const [otherUserHobby, setOtherUserHobby] = useState("");

  useEffect(() => {
    const fetchUserHobby = async () => {
      try {
        const hobbyData = await getUserHobby();
        setUserHobby(hobbyData || "No hobby found");
      } catch (error) {
        console.error("Failed to retrieve hobby:", error);
      }
    };

    fetchUserHobby();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value);
  };

  const handleClickButton = async (userNumber: number) => {
    const otherHobbyData = await getUserHobbyByNo(userNumber);
    setOtherUserHobby(otherHobbyData);
  };

  return (
    <div css={MyContentLayout}>
      <h1 css={MyContentTitleStyle}>취미</h1>

      <div css={MyContentInputWrapper}>
        <h2 css={MyContentLabelStyle}>나의 취미</h2>
        <span css={MyContentTextStyle}>{userHobby}</span>
        <h2 css={MyContentLabelStyle}>다른 사람들의 취미</h2>
        <Input
          value={userNumber}
          onChange={(e) => handleInputChange(e)}
          placeholder="사용자 번호"
        />
      </div>

      <Button variant="myPage" onClick={() => handleClickButton(userNumber)}>
        검색
      </Button>

      <span>{otherUserHobby}</span>
    </div>
  );
};

export default MyPageHobby;
