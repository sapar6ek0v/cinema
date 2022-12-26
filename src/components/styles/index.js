import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontStyleSmNormal, flexJustifyCenter } from '../../helpers/cssFragments';

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const Wrapper = styled.div`
  padding: 70px 0 140px;
  background: #020d18;
  font-family: 'Dosis', sans-serif;
`;

export const Title = styled.h4`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ViewLink = styled(Link)`
  font-size: 16px;
  color: #abb7c4;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s linear;

  &:hover {
    color: #dcf836;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  color: ${(props) => (props.active ? '#dcf836' : '#abb7c4')};
  padding: 0 20px 0 0;
  font-weight: bold;
  text-transform: uppercase;
  background: transparent;
  border: none;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #dcf836;
  }
`;

export const AdvertiseTitle = styled.p`
  color: #233a50;
  ${fontStyleSmNormal};
  ${flexJustifyCenter};
  gap: 2px;
  margin: 0;

  &::before,
  &::after {
    content: '';
    width: 5px;
    height: 1px;
    background-color: #233a50;
    display: inline-block;
  }
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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * 0);
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);
  gap: ${(props) => props.gap && `${props.gap}px`};
`;
