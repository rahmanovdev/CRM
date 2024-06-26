import { styled } from "styled-components";

export const TableContainer = styled.div`
  margin-top: 24px;
`;

export const TableHead = styled.div`
  border-top: 1px solid #eeeff2;
`;

export const TableBody = styled.div``;

export const TableTr = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns || '100px 1fr 0.6fr 1fr 0.7fr 0.7fr 1fr'};
  border-bottom: 1px solid #eeeff2;
  gap: 10px;
  padding: 15px 12px;
`;



export const TableTh = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #718096;
`;

export const TableTd = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: #111827;
`;

export const TableOrder = styled.div``;

export const TableOrderId = styled.div`
  font-family: General Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #718096;
`;

export const TableStatus = styled.div`
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: right;
  border-radius: 8px;
  width:max-content;
  color:${({color}) => color};
  background:${({bg})=> bg};
`;
