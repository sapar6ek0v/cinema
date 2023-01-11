import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import { flexAlignCenter, flexJustifyCenter, fontStyleSmNormal } from '../../../../helpers/cssFragments';

export const SearchFormWrapper = styled.form`
  padding: 48px 0;
  ${flexAlignCenter};
`;

export const SearchFormInput = styled.input`
  height: 46px;
  width: 100%;
  outline: none;
  background-color: ${colors.lightBlue};
  color: ${colors.lightGray};
  ${fontStyleSmNormal};
  padding: 6px 12px;
  border: 4px solid ${colors.darkBlue2};
  border-right: none;
`;

export const SearchFormBtn = styled.button`
  cursor: pointer;
  ${flexJustifyCenter};
  height: 46px;
  padding: 5px 14px;
  background-color: ${colors.pink};
  font-size: 15px;
  color: ${colors.black};
  border: 4px solid ${colors.darkBlue2};
  transition: all 0.4s linear;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.lightBlue};
    color: ${colors.pink};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.pink};
    color: ${colors.black};
  }
`;
