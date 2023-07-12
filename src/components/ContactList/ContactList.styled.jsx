import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 32px;
  color: #0d4ba0;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: #ffc40c;
  border: 3px solid #0d4ba0;
  margin: 0 auto;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 3px solid #0d4ba0;
  color: #0d4ba0;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Btn = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 3px solid #ff4c4c;
  color: #ffffff;
  background-color: #ff0000;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #cc0000;
  }
`;
