import Header from "./Header";
import NumberGame from "./NumberGame";
import styled from "@emotion/styled";
import Ranking from "./Ranking";
import { useState } from "react";
import useTimer from "../hooks/useTimer";

const Content = () => {
  const [content, setContent] = useState("GAME");
  const handleChangeContent = (content) => {
    setContent(content);
  };

  const { time, startTimer, resetTimer } = useTimer();

  return (
    <ContentLayout>
      <Header handleChangeContent={handleChangeContent} content={content} time={time}/>
      {content === "GAME" ? <NumberGame startTimer={startTimer} resetTimer={resetTimer} time={time}/> : <Ranking />}
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
