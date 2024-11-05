import styled from "@emotion/styled";
import theme from "../styles/theme";
import { formatRankingData } from "../utils/format";

const Ranking = ({ gameRanking, handleResetLocalStorage }) => {
  return (
    <RankingLayout>
      <RankingHeaderWrapper>
        <RankingTitleStyle>랭킹</RankingTitleStyle>
        <RankingResetButtonStyle onClick={handleResetLocalStorage}>
          초기화
        </RankingResetButtonStyle>
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
          {gameRanking
            .sort(
              (a, b) => formatRankingData(a.play) - formatRankingData(b.play)
            )
            .map((rank, index) => {
              return (
                <tr key={index}>
                  <td>{rank.time}</td>
                  <td>{rank.level}</td>
                  <td>{rank.play}</td>
                </tr>
              );
            })}
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
