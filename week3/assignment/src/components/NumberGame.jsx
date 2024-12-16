import { useEffect, useState } from "react";
import theme from "../styles/theme";
import NumberCard from "./NumberCard";
import styled from "@emotion/styled";
import { formatTime } from "../utils/format";
import { createRandomArray } from "../utils/createRandomArray";
import { LEVEL } from "../constants/level";

const NumberGame = ({
  startTimer,
  resetTimer,
  time,
  handleSetLocalStorage,
  level,
}) => {
  const [cardNumber, setCardNumber] = useState(1);
  const [numberArray, setNumberArray] = useState(
    createRandomArray(LEVEL[level].MinNumber, LEVEL[level].MaxNumber)
  );
  const [nextNumberArray, setNextNumberArray] = useState(
    createRandomArray(LEVEL[level].MinNextNumber, LEVEL[level].MaxNextNumber)
  );
  const [isVisible, setIsVisible] = useState(
    Array(LEVEL[level].MaxNumber).fill(true)
  );

  const renderNewRandomArray = () => {
    setNumberArray(
      createRandomArray(LEVEL[level].MinNumber, LEVEL[level].MaxNumber)
    );
    setNextNumberArray(
      createRandomArray(LEVEL[level].MinNextNumber, LEVEL[level].MaxNextNumber)
    );
    setIsVisible(Array(LEVEL[level].MaxNumber).fill(true));
  };

  useEffect(() => {
    renderNewRandomArray();
  }, [level]);

  const handleCardNumberChange = (number) => {
    setCardNumber(number);
  };

  const handleCardClick = (number) => {
    if (number === LEVEL[level].MinNumber) {
      startTimer();
    }

    if (number === cardNumber) {
      handleCardNumberChange((prev) => prev + 1);

      const newNumberArray = [...numberArray];
      const updateIsVisible = [...isVisible];
      const numberCardIndex = newNumberArray.indexOf(number);

      if (number <= LEVEL[level].MaxNumber) {
        newNumberArray.splice(numberCardIndex, 1, nextNumberArray[number - 1]);
        setNumberArray(newNumberArray);
      } else {
        updateIsVisible.splice(numberCardIndex, 1, false);
        setIsVisible(updateIsVisible);
      }
    }

    // 수정해라.
    if (number === LEVEL[level].MaxNextNumber) {
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
      <NomberBoardContainer level={level}>
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
  grid-template-columns: ${({ level }) =>
    `repeat(${LEVEL[level].BoardNumber}, 1fr)`};
  gap: 0.5rem;
`;
