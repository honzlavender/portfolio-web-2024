import styled from "styled-components";
import { trolls } from "./styles/styles";
const Name = () => {
  const title = "Honz Williams";
  // const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const colors = trolls.map((color) => color.color);

  const styledText = title.split("").map((letter, index) => (
    <span key={index} style={{ color: colors[index % colors.length] }}>
      {letter}
    </span>
  ));

  return (
    <>
      <Header>{styledText}</Header>
    </>
  );
};

export default Name;

const Header = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 14vw;
  font-family: BagelFat;
`;
