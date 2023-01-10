import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { breakpoints } from '../../../constants/breakpoints';
import { flexColumn, flexJustifyCenter, fontStyleMdNormal } from '../../../helpers/cssFragments';
import bg from '../../../images/moviesBg.jpg';

export const Wrapper = styled.footer`
  background: url(${bg}) center/ cover;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding-top: 50px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding-top: 70px;
  }
`;

export const Grid = styled.div`
  display: grid;
  @media (min-width: ${breakpoints.extraSmall}) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 30px;
    place-items: center;
  }

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 40px;
    place-items: baseline;
  }

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 48px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ImageWrapper = styled.div`
  width: 154px;
  height: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Stack = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 15px;
    align-items: center;
    text-align: center;
  }

  @media (min-width: ${breakpoints.small}) {
    align-items: flex-start;
    text-align: left;
  }

  @media (min-width: ${breakpoints.sm}) {
    gap: 25px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 20px;
  color: ${colors.white};
  text-transform: capitalize;
`;

export const InformTitle = styled.p`
  margin: 0;

  ${fontStyleMdNormal};
  color: ${colors.lightGray};
  ${flexJustifyCenter};
  border-top: 1px solid ${colors.darkGray};

  @media (min-width: ${breakpoints.extraSmall}) {
    text-align: center;
    padding: 20px 0;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 30px 0;
  }
`;
