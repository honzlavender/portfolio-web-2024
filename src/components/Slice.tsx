import { FC } from "react";
import styled from "styled-components";

interface ResumeSliceProps {}

export const ResumeSlice: FC<ResumeSliceProps> = () => {
  const resumePDF = `${require("../resources/assets/honzresume.pdf")}`
  return (
    <>
      <Frame>
        {/* <img
          style={{
            position: "relative",
            zIndex: 1,
            width: "75%",
            objectFit: "cover",
          }}
          src={require("../resources/assets/resume.png")}
        /> */}
      
      {/* <a>download resume</a> */}
      <a href={resumePDF} 
      target="_blank"
      >
        open pdf in new tab
      </a></Frame>
    </>
  );
};

const Frame = styled.div`
  position: fixed;
  height: 50vh;
  width: 40vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0ce0b;
  --mask: linear-gradient(#000 0 0) 50% / calc(100% - 51.8px)
      calc(100% - 51.8px) no-repeat,
    radial-gradient(farthest-side, #000 98%, #0000) 0 0/56px 56px round;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;
