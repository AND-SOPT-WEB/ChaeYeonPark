import { useState } from "react";
import MyPageHobby from "./components/MyPageHobby";
import MyPageInfo from "./components/MyPageInfo";
import {
  MyHeaderButtonStyle,
  MyHeaderTextStyle,
  MyHeaderTitleStyle,
  MyHeaderTitleWrapper,
  MyHeaderWrapper,
} from "./MyPage.style";
import { useNavigate } from "react-router-dom";
import routePath from "../../routers/routePath";

const MyPage = () => {
  const [content, setContent] = useState<"HOBBY" | "INFO">("HOBBY");
  const navigate = useNavigate();

  const handleChangeContent = (content: "HOBBY" | "INFO") => {
    setContent(content);
  };

  const handleClickLogout = () => {
    // 로컬 > 토큰 지우고
    localStorage.removeItem("authToken");
    // 로그인으로 이동
    navigate(routePath.LOGIN);
  };

  return (
    <>
      <header css={MyHeaderWrapper}>
        <div css={MyHeaderTitleWrapper}>
          <h1 css={MyHeaderTitleStyle}>마이페이지</h1>
          <button
            css={MyHeaderButtonStyle}
            onClick={() => handleChangeContent("HOBBY")}
          >
            취미
          </button>
          <button
            css={MyHeaderButtonStyle}
            onClick={() => handleChangeContent("INFO")}
          >
            내 정보
          </button>
        </div>

        <h2 css={MyHeaderTextStyle} onClick={handleClickLogout}>
          로그아웃
        </h2>
      </header>

      <div>
        {content === "HOBBY" && <MyPageHobby />}
        {content === "INFO" && <MyPageInfo />}
      </div>
    </>
  );
};

export default MyPage;
