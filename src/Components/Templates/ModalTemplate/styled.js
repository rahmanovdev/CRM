import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  background-color: rgba(255, 255, 255, 1);
  max-width: 80%;
  width: ${({ width }) => width ?? "680px"};
  border-radius: 24px;
`;

export const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.3);
`;

export const ModalContent = styled.div`
  padding: 24px;
`;

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(26, 32, 44, 0.3);
  backdrop-filter: blur(3px);
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
`;

export const ModalClose = styled.div`
  cursor: pointer;
`;
