import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import {
  flexColumn,
  flexJustifyCenter,
  flexJustifySpaceBetween,
  fontStyleMdNormal,
} from '../../../helpers/cssFragments';

export const Wrapper = styled.div`
  height: 204px;
  min-width: 245px;
  width: 245px;
  border: 1px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${colors.darkBlue};
`;

export const Header = styled.h4`
  color: ${colors.white};
  background-color: ${colors.pink};
  padding: 20px;
  margin: 0;
`;

export const List = styled.ul`
  ${flexColumn};
  padding: 8px 0px;
  list-style: none;
`;

export const Link = styled.li`
  ${flexJustifySpaceBetween};
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? colors.secondaryBlue : 'transparent')};
  color: ${(props) => (props.active ? colors.pathBlue : 'transparent')};
  transition: all 0.4s linear;

  &:hover,
  &:active {
    background-color: ${colors.secondaryBlue};
    color: ${colors.pathBlue};

    p {
      color: ${colors.pathBlue};
    }
  }

  p {
    color: ${(props) => (props.active ? colors.pathBlue : colors.white)};
  }
`;

export const LinkTitle = styled.p`
  ${fontStyleMdNormal};
  color: ${colors.lightGray};
  margin: 0;
`;

export const Quantity = styled.p`
  margin: 0;
  ${flexJustifyCenter};
  font-size: 13px;
  background-color: ${colors.bg4};
  color: ${colors.lightGray};
  padding: 0px 10px;
  border-radius: 8px;
`;
