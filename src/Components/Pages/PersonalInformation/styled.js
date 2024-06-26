import { styled } from "styled-components";

export const Title = styled.h2`
  padding-top: 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  color: rgba(17, 24, 39, 1);
`;

export const HR = styled.div`
  border: 1px solid rgba(241, 242, 244, 1);
  margin-bottom: 32px;
  margin-top: 24px;
`;

export const Form = styled.form``;

export const UploaderBlock = styled.div`
  position: relative;
  flex-direction: ${({ direction }) => direction ?? "row"};
  display: flex;
  align-items: start;
  gap: 16px;
`;

export const UploadImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: gray;
`;

export const UploaderInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
`;

export const UploaderActions = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;
  gap: 10px;
`;

export const UploaderText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: rgba(113, 128, 150, 1);
`;

export const UploaderBtns = styled.div``;

export const UploaderAdd = styled.label`
  font-size: 14px;
  font-weight: 700;
  line-height: 22.4px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(12, 175, 96, 1);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

export const UploaderDelete = styled.div``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

export const FormField = styled.div``;

export const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: rgba(113, 128, 150, 1);
`;

export const FormSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;
