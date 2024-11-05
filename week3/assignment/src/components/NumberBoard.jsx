import { useState } from "react";
import NumberCard from "./NumberCard";
import styled from "@emotion/styled";
import { formatTime } from "../utils/formatTime";

const NumberBoard = ({
  cardNumber,
  handleChangeCardNumber,
  startTimer,
  resetTimer,
  time,
  handleSetLocalStorage,
}) => {
  // 숫자 배열을 만들어서 섞고 렌더링
  const [numberArray, setNumberArray] = useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5)
  );
  // 클릭하면 다음 배열의 값이 나와야 돼! 근데 그것도 랜덤임
  const [nextNumberArray] = useState(
    [10, 11, 12, 13, 14, 15, 16, 17, 18].sort(() => Math.random() - 0.5)
  );
  const [isVisible, setIsVisible] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleCardClick = (number) => {
    console.log(number);

    if (number === 1) {
      startTimer();
    }
    // 딱 클릭했을 때, 이전 값과 비교 {}
    if (number === cardNumber) {
      handleChangeCardNumber();
      const newNumberArray = [...numberArray];
      const updateIsVisible = [...isVisible];
      const index = newNumberArray.indexOf(number);

      if (number <= 9) {
        newNumberArray.splice(index, 1, nextNumberArray[number - 1]);
        setNumberArray(newNumberArray);
      } else {
        updateIsVisible.splice(index, 1, false);
        setIsVisible(updateIsVisible);
      }
    }

    // 수정해라.
    if (number === 18) {
      resetTimer();

      // 로컬 스토리지 저장
      handleSetLocalStorage();
      alert(`게임 끝! 기록: ${formatTime(time)}초`);

      // 게임 초기화
    }
  };

  return (
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
  );
};

export default NumberBoard;

const NomberBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;
