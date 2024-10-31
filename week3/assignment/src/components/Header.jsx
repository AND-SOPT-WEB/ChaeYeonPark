import styled from "@emotion/styled";
import theme from "../styles/theme";

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <TitleStyle>1 to 50</TitleStyle>
        <ButtonWrapper>
          <ButtonStyle>게임</ButtonStyle>
          <ButtonStyle>랭킹</ButtonStyle>
        </ButtonWrapper>
      </HeaderContainer>

      <HeaderContainer>
        <SelectWrapper>
          <SelectStyle>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
          </SelectStyle>
        </SelectWrapper>
        <span>타이머자리</span>
      </HeaderContainer>
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

const ButtonStyle = styled.button`
  ${theme.font.subHead}
  padding: 0.5rem 1rem;
  color: ${theme.color.white};
  background-color: ${theme.color.purple3};
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
