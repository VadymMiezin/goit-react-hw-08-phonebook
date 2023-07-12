import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #ffc40c;
  border: 3px solid #0d4ba0;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #0d4ba0;
  font-size: 20px;
`;

export const Input = styled.input`
  color: #0d4ba0;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  outline: none;
`;

export const Btn = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #0d4ba0;
  color: #0d4ba0;
  background-color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0d4ba0;
    color: #ffffff;
  }
`;
