import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import {
  fontStyleSmNormal,
  flexJustifyCenter,
  fontStyleXlBold,
  fontStyleMdBold,
} from '../../helpers/cssFragments';

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const Wrapper = styled.div`
  padding: 70px 0 140px;
  background: ${colors.darkBlue2};
`;

export const Title = styled.h4`
  font-size: 22px;
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;

export const ViewLink = styled(Link)`
  ${fontStyleMdBold};
  color: ${colors.lightGray};
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    color: ${colors.lightGray};
  }
`;

export const Button = styled.button`
  ${fontStyleMdBold};
  color: ${(props) => (props.active ? colors.yellow : colors.lightGray)};
  padding: 0 20px 0 0;
  text-transform: uppercase;
  background: transparent;
  border: none;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const AdvertiseTitle = styled.p`
  color: ${colors.lightBlue};
  ${fontStyleSmNormal};
  ${flexJustifyCenter};
  gap: 2px;
  margin: 0;

  &::before,
  &::after {
    content: '';
    width: 5px;
    height: 1px;
    background-color: ${colors.lightBlue};
    display: inline-block;
  }
`;

export const Col4 = styled.div`
  padding-left: 40px;
  flex: 0 0 auto;
  width: 33.33333333%;
`;

export const Col8 = styled.div`
  flex: 0 0 auto;
  padding-right: 40px;
  width: 66.66666667%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * 0);
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const NoFoundTitle = styled.p`
  margin: 0;
  ${fontStyleXlBold};
  color: ${colors.lightGray};
`;
