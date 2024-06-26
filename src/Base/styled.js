import { styled } from "styled-components";

export const BlockContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: ${({padding}) => padding ?? '24px 0px'};
  margin-top: ${({marginTop}) => marginTop || 0}
`

export const FlexBlock = styled.div`
  display: flex;
  max-width: ${({width}) => width || '100%'};
  width: 100%;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`

export const GridBlock = styled(FlexBlock)`
  display: grid;
  grid-template-columns: ${({gridColumns})=> gridColumns || 'auto'};
  gap: 10px;
  margin-top: 16px;
  padding: 0px 12px;
`


