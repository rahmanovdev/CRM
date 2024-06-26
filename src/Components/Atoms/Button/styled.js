import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: ${({ display }) => display || "default"};
  align-items: ${({ alignItems }) => alignItems || "default"};
  justify-content: ${({ justifyContent }) => justifyContent || "default"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "56px"};
  padding: 8px 12px;
  gap: 10px;
  border-radius: 12px;
  opacity: 0px;
  border: 1px solid
    ${({ type }) =>
      type === "transparent-dark" ? "rgba(17,24,39,1)" : "rgba(12,175,96,1)"};
  background-color: ${({ type }) =>
    type === "default" ? "rgba(12,175,96,1)" : "white"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  color: ${({ type }) =>
    type === "transparent-dark"
      ? " rgba(17,24,39,1)"
      : type === "transparent"
      ? "rgba(12,175,96,1)"
      : "white"};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(opx);
  }
`;
