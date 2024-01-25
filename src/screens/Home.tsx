import styled from "styled-components";
import Name from "../components/Name";
import Menu from "../components/PieMenu";

const Home = () => {
  return (
    <HomeContainer>
      <Name />
      <Menu x={0} y={0} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
`;
