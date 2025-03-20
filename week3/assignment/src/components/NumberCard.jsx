import styled from "@emotion/styled";
import theme from "../styles/theme";

const NumberCard = ({ cardNumber, handleCardClick, isVisible }) => {
  return (
    <>
      <NumberCardLayout
        onClick={() => handleCardClick(cardNumber)}
        isVisible={isVisible}
      >
        <NumberCardTextStyle>{cardNumber}</NumberCardTextStyle>
      </NumberCardLayout>
    </>
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
  visibility: ${({ isVisible }) => (!isVisible ? "hidden" : "visible")};

  :active {
    background-color: ${theme.color.purple5};
  }
`;

const NumberCardTextStyle = styled.span`
  color: ${theme.color.white};
  ${theme.font.head}
`;
