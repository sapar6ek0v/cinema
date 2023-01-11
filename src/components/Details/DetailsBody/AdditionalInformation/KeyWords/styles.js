import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../../constants/colors';

export const KeyWordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2.5px;
  gap: 2.5px;
`;

export const KeyWordLink = styled(Link)`
  text-decoration: none;
  color: ${colors.link};
  border: 2px solid ${colors.lightBlue};
  margin: 5px;
  padding: 2px 8px;
  border-radius: 8px;
  transition: all 0.4s linear;

  &:hover {
    color: ${colors.yellow};
    border-color: ${colors.yellow};
  }
`;
