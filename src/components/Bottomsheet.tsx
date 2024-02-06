import { FC } from "react";
import styled from "styled-components";

interface BottomsheetContainerProps {
  isOpen?: boolean;
  children?: React.ReactNode;
}

export const Bottomsheet: FC<BottomsheetContainerProps> = ({
  isOpen,
  children,
}) => {
  return (
    <BottomsheetContainer isOpen={isOpen}>
      <BottomsheetContent>{children}</BottomsheetContent>
    </BottomsheetContainer>
  );
};

const BottomsheetContainer = styled.div<BottomsheetContainerProps>`
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? "10%" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  height: 80vh;
  width: 80vh;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 0, 0, 0.7);
  --mask: radial-gradient(
        34.99px at 50% calc(100% - 48px),
        #000 99%,
        #0000 101%
      )
      calc(50% - 60px) 0/120px 100%,
    radial-gradient(34.99px at 50% calc(100% + 18px), #0000 99%, #000 101%) 50%
      calc(100% - 30px) / 120px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const BottomsheetContent = styled.div`
  background-color: #bcf0e7;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 75vh;
  width: 70vh;
  border-radius: 50% 50% 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
