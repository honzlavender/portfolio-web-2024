import styled from "styled-components";
const Name = () => {
  const title = "Honz Williams";
  const colors = ["red", "green", "blue", "orange", "purple"];

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

const Header = styled.div `
justify-content: center;
text-align: center;
align-items: center;
font-size: 100px;
font-family: BagelFat;
`