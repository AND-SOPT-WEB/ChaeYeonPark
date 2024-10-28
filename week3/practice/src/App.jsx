import Card from "./components/Card";
import { members } from "./data";
import styled from "@emotion/styled";

function App() {
  return (
    <CardLayout>
      {members.map((member) => {
        return <Card member={member} />;
      })}
    </CardLayout>
  );
}

export default App;

const CardLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 3rem;
`;
