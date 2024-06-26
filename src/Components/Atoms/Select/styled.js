import { styled } from "styled-components";

export const SelectStyled = styled.div`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth || "248px"};
  width: ${({ width }) => width || "100%"};
`;

export const SelectContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
`;

export const SelectValue = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: ${({ active }) =>
    active === "null" ? "rgba(160, 174, 192, 1)" : "rgba(17, 24, 39, 1)  "};
`;

export const SelectIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SelectOptions = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;
  background-color: #fafafa;
  width: 100%;
  border-radius: 12px;
  color: rgba(17, 24, 39, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  z-index: 5;
  overflow: hidden;
`;

export const SelectOption = styled.div`
  cursor: pointer;
  margin-top: 3px;
  padding: 8px 16px;

  transition: all 0.3s;
  &:first-child {
    margin: 0px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
  }
`;

export const SelectClear = styled.div``;
