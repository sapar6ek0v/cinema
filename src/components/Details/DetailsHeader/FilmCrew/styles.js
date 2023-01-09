import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { fontStyleXlBold, fontStyleXlNormal } from '../../../../helpers/cssFragments';

export const StyledRow = styled(Row)`
  @media (min-width: ${breakpoints.extraSmall}) {
    justify-content: center;
  }

  @media (min-width: ${breakpoints.md}) {
    justify-content: normal;
  }
`;

export const FilmCrewCol = styled.div`
  flex: 0 0 auto;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 33.33333333%;
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
