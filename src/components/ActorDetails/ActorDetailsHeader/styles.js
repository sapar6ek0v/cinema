import styled from 'styled-components';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { flexColumn, fontStyleXlBold } from '../../../helpers/cssFragments';
import cityViewBg from '../../../images/city-view.jpg';
import { Group } from '../../styles';

export const Wrapper = styled.section`
  min-height: calc(100vh - 75px);
  background: ${colors.bg3} url(${cityViewBg}) center/cover;
  background-blend-mode: darken;

  @media (min-width: ${breakpoints.extraSmall}) {
    padding: 50px 12px;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 50px 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 60px;

  @media (min-width: ${breakpoints.extraSmall}) {
    ${flexColumn};
    align-items: center;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: ${breakpoints.extraSmall}) {
    width: 200px;
    height: 250px;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 225px;
    height: 290px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 250px;
    height: 350px;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 300px;
    height: 450px;
  }
`;

export const Stack = styled.div`
  ${flexColumn};

  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 10px;
    align-items: center;
  }

  @media (min-width: ${breakpoints.md}) {
    gap: 20px;
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  margin: 0;

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 36px;
  }
`;

export const ButtonGroup = styled(Group)`
  @media (min-width: ${breakpoints.extraSmall}) {
    gap: 15px;
  }

  @media (min-width: ${breakpoints.small}) {
    gap: 30px;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: ${breakpoints.xl}) {
    gap: 30px;
    justify-content: space-between;
    width: 70%;
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
  border-bottom: 3px solid ${(props) => (props.active ? colors.yellow : 'transparent')};
  ${fontStyleXlBold};
  color: ${(props) => (props.active ? colors.yellow : colors.lightGray)};
  text-transform: uppercase;
  transition: all 0.4s ease-out;
  padding: 0;

  &:hover {
    color: ${colors.yellow};
    border-bottom: 3px solid ${colors.yellow};
  }

  @media (min-width: ${breakpoints.extraSmall}) {
    font-size: 18px;
    padding-bottom: 10px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
    padding-bottom: 15px;
  }
`;
