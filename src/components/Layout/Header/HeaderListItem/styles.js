import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { breakpoints } from '../../../../constants/breakpoints';
import { flexColumn, fontStyleSmNormal } from '../../../../helpers/cssFragments';

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: 20px;
`;

export const SignUpBtn = styled.button`
  ${fontStyleSmNormal};
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${colors.pink};
  border: 2px solid ${colors.white};
  border-radius: 5px;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.pink};
    border: 2px solid ${colors.pink};
    background-color: ${colors.white};
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 2.5px 6px;
    font-size: 12px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 5px 10px;
    font-size: 14px;
  }
`;

export const LangBtn = styled(SignUpBtn)`
  background-color: ${colors.lightBlue};

  &:hover,
  &:active,
  &:focus {
    color: ${colors.lightBlue};
    border: 2px solid ${colors.lightBlue};
  }
`;

export const BurgerMenu = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 4px;
    width: 22px;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 7px;
    width: 26px;
  }
`;

export const BurgerBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.lightGray};
  transition: ${(props) =>
    props.clicked ? 'ease-out 0.5s' : 'cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s'};

  &:nth-child(2) {
    transform: ${(props) => (props.clicked ? 'scale(0.01)' : 'rotate(0) translate(0)')};
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    &:nth-child(1) {
      transform: ${(props) =>
        props.clicked ? 'rotate(45deg) translate(3.1px, 6px)' : 'rotate(0) translate(0)'};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.clicked ? 'rotate(135deg) translate(-2.9px, 6px)' : 'rotate(0) translate(0)'};
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    &:nth-child(1) {
      transform: ${(props) =>
        props.clicked ? 'rotate(45deg) translate(5.2px, 7.5px)' : 'rotate(0) translate(0)'};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.clicked ? 'rotate(135deg) translate(-5.1px, 7.5px)' : 'rotate(0) translate(0)'};
    }
  }
`;

export const Menu = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${colors.lightBlue2};
  position: fixed;
  left: 0;
  z-index: 1;
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: ease-out 0.5s;
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(-100%)')};
  ${flexColumn};
  align-items: center;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 20px;
    gap: 15px;
    top: 50px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 40px;
    gap: 20px;
    top: 74px;
  }
`;
