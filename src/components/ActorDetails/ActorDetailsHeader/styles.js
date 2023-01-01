import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { flexColumn, fontStyleXlBold } from '../../../helpers/cssFragments';
import bg from '../../../images/sr-single.jpg';
import { Group } from '../../styles';

export const Wrapper = styled.section`
  height: 100vh;
  min-height: 600px;
  background: ${colors.bg3} url(${bg}) center/cover;
  background-blend-mode: darken;
  padding: 50px 0px;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 60px;
`;

export const Image = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Stack = styled.div`
  ${flexColumn};
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${colors.white};
  margin: 0;
`;

export const ButtonGroup = styled(Group)`
  gap: 30px;
`;

export const Button = styled.button`
  background: none;
  border: 0;
  border-bottom: 3px solid ${(props) => (props.active ? colors.yellow : 'transparent')};
  ${fontStyleXlBold};
  font-size: 20px;
  color: ${(props) => (props.active ? colors.yellow : colors.lightGray)};
  padding-bottom: 15px;
  text-transform: uppercase;
  transition: all 0.4s ease-out;

  &:hover {
    color: ${colors.yellow};
    border-bottom: 3px solid ${colors.yellow};
  }
`;
