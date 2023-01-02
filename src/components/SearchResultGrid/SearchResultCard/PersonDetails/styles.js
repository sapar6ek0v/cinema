import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexColumn, fontStyleMdNormal } from '../../../../helpers/cssFragments';

export const ImageWrapper = styled.div`
  width: 100px;
  min-width: 100px;
  height: 100px;
`;

export const Details = styled.div`
  ${flexColumn};
  justify-content: center;
  padding: 10px 15px;
`;

export const Group = styled.div`
  display: flex;
  gap: 9px;
`;

export const KnownForTitle = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.white};
  position: relative;

  &::after {
    content: '•';
    position: absolute;
    top: 1px;
    right: -7px;
  }
`;

export const KnownForLink = styled(Link)`
  text-decoration: none;
  ${fontStyleMdNormal};
  color: ${colors.white};
  transition: all 0.4s linear;

  //TODO:
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover,
  &:active,
  &:active {
    color: ${colors.yellow};
  }

  &::after {
    content: ',';
  }

  &:last-child::after {
    content: '';
  }
`;
