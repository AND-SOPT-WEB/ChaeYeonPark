import styled from "@emotion/styled";
import theme from "../styles/theme";

const NumberCard = ({ cardNumber }) => {
  return (
    <NumberCardLayout>
      <NumberCardTextStyle>{cardNumber}</NumberCardTextStyle>
    </NumberCardLayout>
  );
};

export default NumberCard;

const NumberCardLayout = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${theme.color.purple3};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberCardTextStyle = styled.span`
  color: ${theme.color.white};
  ${theme.font.head}
`;
