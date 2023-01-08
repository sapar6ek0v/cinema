import styled from 'styled-components';
import { breakpoints } from '../../../../constants/breakpoints';
import { colors } from '../../../../constants/colors';
import { flexColumn, fontStyleXlNormal, fontStyleMdNormal } from '../../../../helpers/cssFragments';

export const AdditionalInformationWrapper = styled.div`
  padding: 50px;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 10px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 15px;

  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const TitleStack = styled.div`
  ${flexColumn};
  gap: 8px;

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 4px;
  }

  @media (min-width: ${breakpoints.small}) {
    &:last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    &:last-child {
      grid-column-start: 1;
      grid-column-end: 1;
    }
  }
`;

export const Title = styled.p`
  margin: 0;
  ${fontStyleXlNormal};
  color: ${colors.lightGray};

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  margin: 0;
  ${fontStyleMdNormal};
  color: ${colors.link};

  span {
    ${fontStyleMdNormal};
    color: ${colors.link};
    font-style: italic;
  }
`;

export const Image = styled.img`
  max-height: 30px;
  object-fit: contain;
`;
