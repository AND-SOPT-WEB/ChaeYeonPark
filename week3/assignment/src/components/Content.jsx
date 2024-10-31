import Header from "./header";
import NumberGame from "./NumberGame";
import styled from "@emotion/styled";
import Ranking from "./Ranking";
import { useState } from "react";

const Content = () => {
  const [content, setContent] = useState("GAME");
  const handleChangeContent = (content) => {
    setContent(content);
  };

  return (
    <ContentLayout>
      <Header handleChangeContent={handleChangeContent} />
      {content === "GAME" ? <NumberGame /> : <Ranking />}
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
