import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { flexJustifyCenter } from '../../helpers/cssFragments';
import { CheckboxLabel, Label } from '../styles';

export const Wrapper = styled.section`
  min-height: 100vh;
  background-color: ${colors.darkBlue};
  ${flexJustifyCenter};
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.lightGray};
  text-align: center;
`;

export const SignUpLabel = styled(Label)`
  color: ${colors.lightGray};
`;

export const SignUpCheckboxLabel = styled(CheckboxLabel)`
  color: ${colors.lightGray};
`;
