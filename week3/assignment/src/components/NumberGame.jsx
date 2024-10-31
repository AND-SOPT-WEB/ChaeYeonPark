import theme from "../styles/theme";
import NumberBoard from "./NumberBoard";
import styled from "@emotion/styled";

const NumberGame = () => {
  return (
    <NumberGameLayout>
      <NumberBoardTextStyle> 다음 숫자: 1</NumberBoardTextStyle>
      <NumberBoard />
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
