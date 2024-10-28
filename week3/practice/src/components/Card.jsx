import styled from "@emotion/styled";
import { useState } from "react";

const Card = ({ member }) => {
  const { name, englishName, github } = member;

  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CardContainer>
      <NameWrapper>{name}</NameWrapper>
      <span>{englishName}</span>
      <span>{github}</span>

      <div>
        <span>{count}</span>
        <button onClick={handleClickButton}>like</button>
      </div>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 10px;

  width: 15rem;
  height: 10rem;
`;

const NameWrapper = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;
