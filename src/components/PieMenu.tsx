import React, { useState } from "react";
import PieMenu, { Slice, background } from "react-pie-menu";
import styled, { ThemeProvider } from "styled-components";
import { pieTheme } from "./styles/pieTheme";
import { Bottomsheet } from "./Bottomsheet";
import { useClickAway } from "@uidotdev/usehooks";
import { trolls } from "./styles/styles";

const Menu = ({ x, y }: { x: number; y: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlice, setSelectedSlice] = useState<string>("");
  const ref = useClickAway(() => {
    setIsOpen(false);
  });
  const toggleBottomsheet = (selectedSlice: string) => {
    if (selectedSlice) {
      console.log(selectedSlice);
      setSelectedSlice(selectedSlice);
      setIsOpen(!isOpen);
    } else {
      console.log("nope");
    }
  };
  //how to make the function open the correct content
  //pass each slice component into here as children? or bottomsheet?
  const currentSlice = (
    <div style={{ fontFamily: "FasterOne", fontSize: "60px" }}>
      {selectedSlice}
    </div>
  );

  return (
    <Container>
      <ThemeProvider theme={pieTheme}>
        <PieMenu radius="300px" centerRadius="100px" centerX={10} centerY={10}>
          {trolls.map((item) => (
            <Slice
              key={item.title}
              onSelect={() => toggleBottomsheet(item.title)}
              backgroundColor={item.color}
            >
              {item.title}
            </Slice>
          ))}
        </PieMenu>
      </ThemeProvider>
      {isOpen && (
        <>
          <Overlay />
          <div ref={ref as any}>
            <Bottomsheet isOpen={isOpen} children={currentSlice} />
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.4);
`;

export default Menu;
