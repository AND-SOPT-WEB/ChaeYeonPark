import styled from "@emotion/styled";
import theme from "../styles/theme";

const Modal = ({ gameTime, handleCloseModal }) => {
  return (
    <ModalLayout>
      <ModalText>{`⏱️ ${gameTime}초 게임 끝 🕹️`}</ModalText>
      <ModalButton onClick={handleCloseModal}>닫기</ModalButton>
    </ModalLayout>
  );
};

export default Modal;

const ModalLayout = styled.div`
  width: 50rem;
  height: 20rem;
  position: absolute;
  z-index: 1;
  background-color: ${theme.color.purple5};
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ModalText = styled.h2`
  ${theme.font.subHead}
`;

const ModalButton = styled.button`
  background-color: ${theme.color.purple3};
  color: ${theme.color.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
`;
