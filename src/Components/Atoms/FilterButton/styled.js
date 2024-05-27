import { styled } from "styled-components";

export const FilterButtonStyled = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  border: 1px solid gray;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 1);
`;

export const FilterIconStyled = styled.div`
svg{
    path {
        stroke: ${({active}) => active === 'true' ? 'rgba(12, 175, 96, 1)' : ' rgba(113, 128, 150, 1)'};;
    };
}
`;

export const FilterText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: ${({active}) => active === 'true' ? 'rgba(12, 175, 96, 1)' : ' rgba(113, 128, 150, 1)'};
`;
