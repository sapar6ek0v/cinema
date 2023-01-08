import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';
import { flexColumn, fontStyleMdNormal } from '../../helpers/cssFragments';
import { Group } from '../styles';

export const Wrapper = styled.div`
  background-color: ${colors.darkBlue2};

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 70px 0;
  }
`;

export const Stack = styled.div`
  ${flexColumn};
  gap: 30px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (min-width: ${breakpoints.extraLg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ButtonGroup = styled(Group)`
  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 20px;
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;

    &:last-child {
      justify-content: flex-end;
    }
  }
`;

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
