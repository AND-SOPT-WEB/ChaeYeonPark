import styled from "@emotion/styled";
import theme from "../styles/theme";

const Ranking = () => {
  return (
    <RankingLayout>
      <RankingHeaderWrapper>
        <RankingTitleStyle>랭킹</RankingTitleStyle>
        <RankingResetButtonStyle>초기화</RankingResetButtonStyle>
      </RankingHeaderWrapper>

      <RankingTableWrapper>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2024.10.25 오후 5:10:52</td>
            <td>Level 1</td>
            <td>713초</td>
          </tr>
          <tr>
            <td>2024.10.25 오후 5:10:52</td>
            <td>Level 1</td>
            <td>713초</td>
          </tr>
          <tr>
            <td>2024.10.25 오후 5:10:52</td>
            <td>Level 1</td>
            <td>713초</td>
          </tr>
        </tbody>
      </RankingTableWrapper>
    </RankingLayout>
  );
};

export default Ranking;

const RankingLayout = styled.div`
  min-width: 70rem;
  background-color: ${theme.color.white};
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const RankingHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankingTitleStyle = styled.span`
  ${theme.font.head};
`;

const RankingResetButtonStyle = styled.button`
  position: absolute;
  right: 2rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const RankingTableWrapper = styled.table`
  width: 100%;
`;

// const RankingTableHead = styled.th`
//   background-color: ${theme.color.purple1};
// `;
