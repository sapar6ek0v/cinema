import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { fontStyleSmNormal } from '../../../../helpers/cssFragments';

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const SignUpBtn = styled.button`
  ${fontStyleSmNormal};
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${colors.pink};
  padding: 5px 10px;
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
