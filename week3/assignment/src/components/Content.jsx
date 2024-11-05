import Header from "./Header";
import NumberGame from "./NumberGame";
import styled from "@emotion/styled";
import Ranking from "./Ranking";
import { useState } from "react";
import useTimer from "../hooks/useTimer";
import { formatTime } from "../utils/formatTime";

const Content = () => {
  const [content, setContent] = useState("GAME");
  const handleChangeContent = (content) => {
    setContent(content);
  };

  const { time, startTimer, resetTimer } = useTimer();

  if (!localStorage.getItem("ranking")) {
    localStorage.setItem("ranking", JSON.stringify([]));
  }

  const [gameRanking, setGameRanking] = useState(
    JSON.parse(localStorage.getItem("ranking"))
  );

  const handleSetLocalStorage = () => {
    const today = new Date();

    // 시간 형식화
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    // 오전/오후 표시
    const ampm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // 12시간제 변환

    // 최종 날짜 및 시간 포맷팅
    const formattedDate = `${today.getFullYear()}. ${
      today.getMonth() + 1
    }. ${today.getDate()}. ${ampm} ${formattedHours}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;

    const newRank = {
      time: `${formattedDate}`,
      level: "level 01",
      play: `${formatTime(time)}`,
    };

    const updateGameRanking = [...gameRanking, newRank];
    setGameRanking(updateGameRanking);
    localStorage.setItem("ranking", JSON.stringify(updateGameRanking));
  };

  return (
    <ContentLayout>
      <Header
        handleChangeContent={handleChangeContent}
        content={content}
        time={time}
      />
      {content === "GAME" ? (
        <NumberGame
          startTimer={startTimer}
          resetTimer={resetTimer}
          time={time}
          handleSetLocalStorage={handleSetLocalStorage}
        />
      ) : (
        <Ranking gameRanking={gameRanking} />
      )}
    </ContentLayout>
  );
};

export default Content;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;
