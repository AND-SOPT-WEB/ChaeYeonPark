import styled from "@emotion/styled";
import theme from "../styles/theme";
import { useState } from "react";
import { formatTime } from "../utils/formatTime";

const Header = ({ handleChangeContent, content, time }) => {
  const [buttonState, setButtonState] = useState("GAME");

  const handleClickButton = (content) => {
    handleChangeContent(content);
    setButtonState(content);
  };

  return (
    <HeaderLayout>
      <HeaderContainer>
        <TitleStyle>1 to 50</TitleStyle>
        <ButtonWrapper>
          <GameButtonStyle
            buttonState={buttonState}
            onClick={() => handleClickButton("GAME")}
          >
            게임
          </GameButtonStyle>
          <RankingButtonStyle
            buttonState={buttonState}
            onClick={() => handleClickButton("RANKING")}
          >
            랭킹
          </RankingButtonStyle>
        </ButtonWrapper>
      </HeaderContainer>

      {content === "GAME" && (
        <HeaderContainer>
          <SelectWrapper>
            <SelectStyle>
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
            </SelectStyle>
          </SelectWrapper>
          <TimerStyle>{formatTime(time)}</TimerStyle>
        </HeaderContainer>
      )}
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 5rem;
  background-color: ${theme.color.purple5};
`;

const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TitleStyle = styled.h1`
  ${theme.font.head}
  color: ${theme.color.white};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GameButtonStyle = styled.button`
  ${theme.font.subHead};
  padding: 0.5rem 1rem;
  color: ${theme.color.white};
  background-color: ${({ buttonState }) =>
    buttonState === "GAME" ? theme.color.purple3 : theme.color.purple5};
  border: none;
  border-radius: 5px;
`;

const RankingButtonStyle = styled.button`
  ${theme.font.subHead};
  padding: 0.5rem 1rem;
  color: ${theme.color.white};
  background-color: ${({ buttonState }) =>
    buttonState === "RANKING" ? theme.color.purple3 : theme.color.purple5};
  border: none;
  border-radius: 5px;
`;

const SelectWrapper = styled.div`
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${theme.color.white};
`;

const SelectStyle = styled.select`
  border: none;
`;

const TimerStyle = styled.span`
  ${theme.font.subHead}
  color: ${theme.color.white};
`;
