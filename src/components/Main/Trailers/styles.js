import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { breakpoints } from '../../../constants/breakpoints';
import { flexColumn, fontStyleMdNormal } from '../../../helpers/cssFragments';

export const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.darkBlue};

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
    min-height: 70vh;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 70px 0;
    min-height: 80vh;
  }
`;

export const Grid = styled.div`
  display: grid;
  border-radius: 4px;
  border: 1px solid transparent;
  overflow: hidden;

  @media (min-width: ${breakpoints.extraSmall}) {
    margin-top: 30px;
    grid-template-columns: 1fr;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 40px;
    grid-template-columns: 2fr 1fr;
  }
`;

export const IFrame = styled.div`
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isLoading ? 'block' : 'none')};
    background: ${colors.secondaryWhite};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: not-allowed;
    opacity: ${(props) => (props.isLoading ? '1' : '0')};
    transition: ease-out 0.5s;
  }
`;

export const ButtonStack = styled.div`
  ${flexColumn};
  background-color: ${colors.darkBlue2};
  overflow: auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-direction: row;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Button = styled.div`
  ${fontStyleMdNormal};
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => (props.active ? colors.yellow : colors.lightGray)};
  background-color: ${(props) => (props.active ? colors.secondaryBlue : 'transparent')};
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.secondaryBlue};
    color: ${colors.yellow};
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    white-space: nowrap;
  }

  @media (min-width: ${breakpoints.md}) {
    white-space: normal;
  }
`;
