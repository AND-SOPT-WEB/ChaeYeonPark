import { useState } from "react";
import useTimer from "../hooks/useTimer";
import { formatTime, formatDate } from "../utils/format";
import styled from "@emotion/styled";
import Header from "../components/Header";
import NumberGame from "../components/NumberGame";
import Ranking from "../components/Ranking";

const Game = () => {
  const [content, setContent] = useState("GAME");
  const [level, setLevel] = useState(1);

  const [gameRanking, setGameRanking] = useState(
    JSON.parse(localStorage.getItem("ranking"))
  );

  const { time, startTimer, resetTimer } = useTimer();

  const handleChangeContent = (content) => {
    setContent(content);
  };

  const handleChangeLevel = (level) => {
    setLevel(level)
    console.log(level)
  }

  const handleSetLocalStorage = () => {
    const newRank = {
      time: `${formatDate()}`,
      level: `level ${level}`,
      play: `${formatTime(time)}`,
    };

    const updateGameRanking = [...gameRanking, newRank];
    setGameRanking(updateGameRanking);
    localStorage.setItem("ranking", JSON.stringify(updateGameRanking));
  };

  const handleResetLocalStorage = () => {
    setGameRanking([]);
    localStorage.setItem("ranking", []);
  };

  if (!localStorage.getItem("ranking")) {
    localStorage.setItem("ranking", JSON.stringify([]));
  }

  return (
    <ContentLayout>
      <Header
        handleChangeContent={handleChangeContent}
        content={content}
        handleChangeLevel={handleChangeLevel}
        time={time}
      />
      {content === "GAME" ? (
        <NumberGame
          startTimer={startTimer}
          resetTimer={resetTimer}
          time={time}
          handleSetLocalStorage={handleSetLocalStorage}
          level={level}
        />
      ) : (
        <Ranking
          gameRanking={gameRanking}
          handleResetLocalStorage={handleResetLocalStorage}
        />
      )}
    </ContentLayout>
  );
};

export default Game;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;
