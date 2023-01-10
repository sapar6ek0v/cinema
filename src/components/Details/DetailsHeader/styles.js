import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import {
  flexAlignCenter,
  flexJustifyCenter,
  fontStyleMdNormal,
  fontStyleXlBold,
  fontStyleXlNormal,
} from '../../../helpers/cssFragments';
import { Group } from '../../styles';

export const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
`;

export const DetailsHeaderWrapper = styled.div`
  min-height: 100vh;
  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
    margin-top: 50px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 50px 0;
    margin-top: 74px;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 70px 0;
  }
`;

export const Grid = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 2fr;
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 40px;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
    ${flexJustifyCenter};
  }

  @media (min-width: ${breakpoints.md}) {
    display: block;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 90%;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s linear;
  object-fit: cover;

  &:hover {
    filter: blur(4px) brightness(40%);
  }

  &:hover + span {
    opacity: 1;
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    min-width: 250px;
    width: 250px;
    height: 350px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 100%;
    min-width: 100%;
  }

  @media (min-width: ${breakpoints.xl}) {
    height: 450px;
  }
`;

export const Expand = styled.span`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s all;
  pointer-events: none;
  ${flexAlignCenter};
  line-height: 40px;
  font-size: 30px;
  gap: 4px;

  svg {
    height: 40px;
    font-size: 20px;
  }
`;

export const Column8 = styled.div`
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  ${fontStyleXlBold};
  ${flexAlignCenter};
  color: ${colors.white};
  gap: 4px;

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 30px;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 34px;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-wrap: nowrap;
    font-size: 36px;
    line-height: 40px;
  }

  @media (min-width: ${breakpoints.xl}) {
    justify-content: flex-start;
  }
`;

export const ReleaseYear = styled.p`
  margin: 0;
  ${fontStyleXlBold};
  font-size: 24px;
  line-height: 30px;
  color: ${colors.secondaryGray};
  text-transform: uppercase;

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 20px;
    line-height: 20px;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 22px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const TextGroup = styled(Group)`
  margin-bottom: 10px;

  @media (min-width: ${breakpoints.extraSmall}) {
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: normal;
  }
`;

export const Time = styled.p`
  margin: 0;
  ${fontStyleXlBold};
  color: ${colors.lightGray};
  position: relative;

  &::after,
  &::before {
    content: '•';
    position: absolute;
  }

  &::after {
    top: 1px;
    right: -10px;
    display: ${(props) => (props.after ? 'block' : 'none')};
  }

  &::before {
    top: 1px;
    left: -10px;
    display: ${(props) => (props.before ? 'block' : 'none')};
  }
`;

export const Genre = styled.p`
  margin: 0;
  ${fontStyleXlNormal};
  color: ${colors.white};

  &::after {
    content: ',';
  }

  &:last-child::after {
    content: '';
  }
`;

export const MediaGroup = styled(Group)`
  @media (min-width: ${breakpoints.extraSmall}) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: normal;
  }
`;

export const Tagline = styled.p`
  font-style: italic;
  ${fontStyleXlNormal};
  font-size: 20px;
  color: ${colors.lightGray};

  @media (min-width: ${breakpoints.extraSmall}) {
    margin: 25px 0 0 0;
    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    margin: 30px 0 0 0;
  }

  @media (min-width: ${breakpoints.md}) {
    text-align: start;
  }
`;

export const OverviewBlock = styled.div`
  padding: 30px 0;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 25px 0;
    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 30px 0;
  }

  @media (min-width: ${breakpoints.md}) {
    text-align: start;
  }
`;

export const OverviewTitle = styled.h3`
  color: ${colors.lightGray};
  margin-bottom: 5px;
`;

export const Overview = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.white};
`;
