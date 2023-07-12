import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #0d4ba0;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;
