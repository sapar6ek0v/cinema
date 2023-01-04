import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { flexColumn, flexJustifyCenter, fontStyleMdNormal } from '../../../helpers/cssFragments';
import bg from '../../../images/moviesBg.jpg';

export const Wrapper = styled.footer`
  padding-top: 70px;
  background: url(${bg}) center/ cover;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 48px;
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
  gap: 25px;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 20px;
  color: ${colors.white};
  text-transform: capitalize;
`;

export const InformTitle = styled.p`
  margin: 0;
  padding: 30px 0;
  ${fontStyleMdNormal};
  color: ${colors.lightGray};
  ${flexJustifyCenter};
  border-top: 1px solid ${colors.darkGray};
`;
