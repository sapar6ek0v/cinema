import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
  padding: 70px 0 140px;
  background: ${colors.darkBlue2};
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
