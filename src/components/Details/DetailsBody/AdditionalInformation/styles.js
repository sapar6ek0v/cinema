import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexColumn, fontStyleXlNormal, fontStyleMdNormal } from '../../../../helpers/cssFragments';

export const AdditionalInformationWrapper = styled.div`
  padding: 50px;
`;

export const Stack = styled.div`
  ${flexColumn};
  gap: 15px;
`;

export const TitleStack = styled.div`
  ${flexColumn};
  gap: 8px;
`;

export const Title = styled.p`
  margin: 0;
  ${fontStyleXlNormal};
  font-size: 24px;
  color: ${colors.lightGray};
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
