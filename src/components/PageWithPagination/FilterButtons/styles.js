import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { Group } from '../../styles';
import { Button } from '../styles';

export const ButtonGroup = styled(Group)``;

export const FilterButton = styled(Button)`
  border-radius: 0px;

  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }

  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 4px 5px;
    font-size: 14px;
  }

  @media (min-width: ${breakpoints.small}) {
    padding: 4px 8px;
    font-size: 16px;
  }
`;
