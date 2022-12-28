import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import {
  flexAlignCenter,
  fontStyleMdNormal,
  fontStyleXlBold,
  fontStyleXlNormal,
} from '../../../helpers/cssFragments';
import { Group } from '../../styles';

export const DetailsHeaderWrapper = styled.section`
  padding: 50px 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  cursor: pointer;
  min-width: 300px;
  width: 300px;
  height: 450px;
  border-radius: 5px;
  transition: all 0.4s linear;

  &:hover {
    filter: blur(4px) brightness(40%);
  }

  &:hover + span {
    opacity: 1;
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
  width: 66.66666667%;
`;

export const Title = styled.h1`
  ${fontStyleXlBold};
  ${flexAlignCenter};
  align-items: flex-end;
  font-size: 36px;
  line-height: 40px;
  color: ${colors.white};
  gap: 4px;
`;

export const ReleaseYear = styled.p`
  margin: 0;
  ${fontStyleXlBold};
  font-size: 24px;
  line-height: 30px;
  color: ${colors.secondaryGray};
  text-transform: uppercase;
`;

export const TextGroup = styled(Group)`
  margin-bottom: 10px;
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

export const MediaGroup = styled(Group)``;

export const Tagline = styled.p`
  margin: 30px 0 0 0;
  font-style: italic;
  ${fontStyleXlNormal};
  font-size: 20px;
  color: ${colors.lightGray};
`;

export const OverviewBlock = styled.div`
  padding: 30px 0;
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
