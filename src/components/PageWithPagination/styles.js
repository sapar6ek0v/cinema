import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { flexColumn, fontStyleMdNormal } from '../../helpers/cssFragments';
import { Group } from '../styles';

export const Wrapper = styled.section`
  padding: 70px 0;
  background-color: ${colors.darkBlue2};
`;

export const Stack = styled.div`
  ${flexColumn};
  gap: 30px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 40px;
  /* @media (max-width: 992px) { */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* } */

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonGroup = styled(Group)``;

export const Button = styled.button`
  padding: 4px 8px;
  ${fontStyleMdNormal};
  color: ${(props) => (props.active ? colors.lightBlue : colors.link)};
  border: 2px solid ${(props) => (props.active ? colors.link : colors.lightBlue)};
  background: ${(props) => (props.active ? colors.link : colors.lightBlue)};
  border-radius: 5px;
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: ${colors.link};
    color: ${colors.lightBlue};
    border: 2px solid ${colors.link};
  }
`;
