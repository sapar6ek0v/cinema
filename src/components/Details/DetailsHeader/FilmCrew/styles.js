import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { fontStyleXlBold, fontStyleXlNormal } from '../../../../helpers/cssFragments';

export const FilmCrewCol = styled.div`
  flex: 0 0 auto;
  width: 25%;

  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  @media (max-width: 576px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

export const FilmCrewCard = styled.div`
  padding: 2px 0 10px;
`;

export const JobTitle = styled.h6`
  margin: 0;
  ${fontStyleXlBold};
  color: ${colors.lightGray};
`;

export const FilmCrewMemberName = styled.p`
  margin: 0;
  ${fontStyleXlNormal};
  color: ${colors.link};

  &:hover {
    color: ${colors.yellow};
  }
`;
