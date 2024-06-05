import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 13px;
  gap: 10px;
  border-radius: 12px;
  background: ${({type})=> type ===  'default' ? 'rgba(12, 175, 96, 1)' : 'white'}  ;
  border: 1px solid ${({type})=> type === 'transparent-dark' ? 'rgba(17, 24, 39, 1)' : 'rgba(12, 175, 96, 1)'} ;
  color: ${({type})=> type === 'transparent-dark' ? 'rgba(17, 24, 39, 1)' : type === 'transparent' ? 'rgba(12, 175, 96, 1)': 'white'} ;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0px);
  }

`;
