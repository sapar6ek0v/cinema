import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexColumn, fontStyleMdBold } from '../../../../helpers/cssFragments';
import { colors } from '../../../../constants/colors';

export const CardWrapper = styled.div`
  flex: 0 0 auto;
  width: 50%;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  ${flexColumn};
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const StartIcon = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${colors.pink};
  font-size: 55px;
  background: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s ease-out;

  &:hover {
    font-size: 60px;
    background: ${colors.pink};
    color: ${colors.white};
  }
`;

export const Header = styled.p`
  margin: 0;
  ${fontStyleMdBold};
  color: ${colors.lightGray};
  text-transform: uppercase;
  text-align: center;
`;

export const QuantityTitle = styled.p`
  margin: 0;
  ${fontStyleMdBold};
  font-size: 17px;
  color: ${colors.lightBlue};
  text-align: center;

  span {
    ${fontStyleMdBold};
    color: ${colors.orange};
  }
`;
