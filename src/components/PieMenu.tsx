import React from "react";
import PieMenu, { Slice, PieCenter } from "react-pie-menu";
import styled, { ThemeProvider } from "styled-components";
import { pieTheme } from "./styles/pieTheme";

const Menu = ({ x, y }: { x: number; y: number }) => {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  const menuItems = [
    {
      title: "resume",
      color: "red",
    },
    {
      title: "about me",
      color: "orange",
    },
    {
      title: "professional work",
      color: "yellow",
    },
    {
      title: "art",
      color: "green",
    },
    {
      title: "currently watching",
      color: "blue",
    },
    {
      title: "playlist",
      color: "purple",
    },
  ];
  return (
    <Container>
      <ThemeProvider theme={pieTheme}>
        <PieMenu radius="200px" centerRadius="70px" centerX={10} centerY={10}>
          {menuItems.map((item) => (
            <Slice backgroundColor={item.color}>{item.title}</Slice>
          ))}
        </PieMenu>
      </ThemeProvider>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
