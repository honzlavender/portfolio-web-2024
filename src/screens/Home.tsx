import styled from "styled-components";
import Name from "../components/Name";
import Menu from "../components/PieMenu";
import { useState } from "react";
import "./home.css";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <HomeContainer>
      <Name />
      <Menu x={""} y={""} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
