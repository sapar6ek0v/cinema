import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLinkBtn = styled(Link)`
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: #abb7c4;
  text-transform: uppercase;
  padding: 2px 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: #dcf836;
  }
`;
