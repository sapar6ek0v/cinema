import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { Group } from '../../styles';
import { Button } from '../styles';

export const ButtonGroup = styled(Group)``;

export const FilterButton = styled(Button)`
  border-radius: 0px;
  /* border-right-color: ${colors.link}; */

  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }

  &:last-child {
    border-radius: 0px 5px 5px 0px;
    /* border-right-color: ${colors.lightBlue}; */
  }
`;
