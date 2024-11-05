import { useState } from "react";
import theme from "../styles/theme";
import NumberBoard from "./NumberBoard";
import styled from "@emotion/styled";

const NumberGame = ({ startTimer, resetTimer, time }) => {
  const [cardNumber, setCardNumber] = useState(1); // 카드 순서

  const handleChangeCardNumber = () => {
    setCardNumber((prev) => prev + 1);
  };
  return (
    <NumberGameLayout>
      <NumberBoardTextStyle> 다음 숫자: {cardNumber}</NumberBoardTextStyle>
      <NumberBoard
        cardNumber={cardNumber}
        handleChangeCardNumber={handleChangeCardNumber}
        startTimer={startTimer}
        resetTimer={resetTimer}
        time={time}
      />
    </NumberGameLayout>
  );
};

export default NumberGame;

const NumberGameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const NumberBoardTextStyle = styled.span`
  ${theme.font.subHead}
`;
