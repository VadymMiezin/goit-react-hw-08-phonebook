import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: #0d4ba0;
  font-size: 20px;
`;

export const Btn = styled.button`
  padding: 4px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 3px solid #0d4ba0;
  color: #0d4ba0;
  background-color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;

  &:hover {
    background-color: #0d4ba0;
    color: #ffffff;
  }
`;
