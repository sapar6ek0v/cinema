import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { flexJustifySpaceBetween, fontStyleSmNormal } from '../../../../helpers/cssFragments';

export const Wrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 80%;
    padding: 20px;
  }

  @media (min-width: ${breakpoints.small}) {
    width: 65%;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 50%;
    padding: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 45%;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 40%;
    padding: 40px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.black};
  text-align: center;
`;

export const FormGroup = styled.div`
  ${flexJustifySpaceBetween};
  gap: 20px;
`;

export const FormNavigateLink = styled.button`
  ${fontStyleSmNormal};
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${colors.mediaLink};
  text-decoration: underline;
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: ${colors.pinkHover};
  }

  &:visited {
    color: ${colors.pinkHover};
  }
`;
