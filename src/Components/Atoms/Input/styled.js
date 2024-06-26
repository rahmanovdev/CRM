import { styled } from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid #fafafa;
  width: ${({ width }) => width || "default"};
  height: ${({ height }) => height || "default"};
  font-size: 16px;
  padding: ${({ padding }) => padding || "10px 40px"};
  font-weight: 500;
  line-height: 20px;
  border-radius: 12px;
  outline: none;
  background-color: rgba(250, 250, 250, 1);
`;
