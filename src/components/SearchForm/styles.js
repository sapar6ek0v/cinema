import styled from 'styled-components';
import { flexAlignCenter, flexJustifyCenter, fontStyleSmNormal } from '../../helpers/cssFragments';

export const SearchFormWrapper = styled.form`
  padding: 48px 0;
  ${flexAlignCenter};
`;

export const SearchFormInput = styled.input`
  height: 46px;
  width: 100%;
  border: none;
  outline: none;
  background-color: #233a50;
  color: #abb7c4;
  ${fontStyleSmNormal};
  padding: 6px 12px;
  border: 4px solid #020d18;
  border-right: none;
`;

export const SearchFormBtn = styled.button`
  cursor: pointer;
  ${flexJustifyCenter};
  height: 46px;
  padding: 5px 14px;
  background-color: #dd003f;
  font-size: 15px;
  color: #000;
  border: 4px solid #020d18;
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    background-color: #233a50;
    color: #dd003f;
  }
`;
