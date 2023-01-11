import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import {
  flexAlignCenter,
  flexColumn,
  fontStyleMdBold,
  fontStyleMdNormal,
  fontStyleXlNormal,
} from '../../../../helpers/cssFragments';

export const ActorsCard = styled.div`
  ${flexColumn};
  gap: 8px;
`;

export const ActorImage = styled.img`
  width: 148px;
  height: 220px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ActorName = styled(Link)`
  ${fontStyleMdBold};
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    color: ${colors.yellow};
  }
`;

export const ActorCharacter = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.mediaLink};
`;

export const ButtonCenter = styled.div`
  ${flexAlignCenter};
`;

export const Button = styled.button`
  background: none;
  border: none;
  ${fontStyleXlNormal};
  color: ${colors.lightBlue};
  transition: all 0.4s linear;
  ${flexAlignCenter};
  gap: 3px;

  &:hover {
    color: ${colors.yellow};
    span {
      color: ${colors.yellow};
    }
  }

  span {
    ${fontStyleXlNormal};
    color: ${colors.lightBlue};
    transition: all 0.4s linear;
  }
`;
