import { useState } from "react";
import theme from "../styles/theme";
import NumberCard from "./NumberCard";
import styled from "@emotion/styled";
import { formatTime } from "../utils/format";
import { createRandomArray } from "../utils/createRandomArray";

const NumberGame = ({
  startTimer,
  resetTimer,
  time,
  handleSetLocalStorage,
}) => {
  const [cardNumber, setCardNumber] = useState(1);
  const [numberArray, setNumberArray] = useState(createRandomArray(1, 9));
  const [nextNumberArray, setNextNumberArray] = useState(
    createRandomArray(10, 18)
  );
  const [isVisible, setIsVisible] = useState(Array(9).fill(true));

  const renderNewRandomArray = () => {
    setNumberArray(createRandomArray(1, 9));
    setNextNumberArray(createRandomArray(10, 18));
    setIsVisible(Array(9).fill(true));
  };

  const handleCardNumberChange = (number) => {
    setCardNumber(number);
  };

  const handleCardClick = (number) => {
    if (number === 1) {
      startTimer();
    }

    if (number === cardNumber) {
      handleCardNumberChange((prev) => prev + 1);

      const newNumberArray = [...numberArray];
      const updateIsVisible = [...isVisible];
      const numberCardIndex = newNumberArray.indexOf(number);

      if (number <= 9) {
        newNumberArray.splice(numberCardIndex, 1, nextNumberArray[number - 1]);
        setNumberArray(newNumberArray);
      } else {
        updateIsVisible.splice(numberCardIndex, 1, false);
        setIsVisible(updateIsVisible);
      }
    }

    // 수정해라.
    if (number === 18) {
      resetTimer();
      handleSetLocalStorage();
      alert(`게임 끝! 기록: ${formatTime(time)}초`);
      renderNewRandomArray();
      handleCardNumberChange(1);
    }
  };

  return (
    <NumberGameLayout>
      <NumberBoardTextStyle> 다음 숫자: {cardNumber}</NumberBoardTextStyle>
      <NomberBoardContainer>
        {numberArray.map((number, index) => {
          return (
            <NumberCard
              key={index}
              cardNumber={number}
              handleCardClick={handleCardClick}
              isVisible={isVisible[index]}
            />
          );
        })}
      </NomberBoardContainer>
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

const NomberBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;
