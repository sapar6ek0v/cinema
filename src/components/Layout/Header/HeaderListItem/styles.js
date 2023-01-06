import styled from "styled-components";
import { fontStyleSmNormal } from "../../../../helpers/cssFragments";

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;

export const SignUpBtn = styled.button`
  ${fontStyleSmNormal};
  text-transform: uppercase;
  color: #fff;
  background-color: #dd003f;
  padding: 5px 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: all 0.4s linear;

  &:hover,
  &:active,
  &:focus {
    color: #dd003f;
    border: 2px solid #dd003f;
    background-color: #fff;
  }
`;

export const LangBtn = styled(SignUpBtn)`
  background-color: #233a50;

  &:hover,
  &:active,
  &:focus {
    color: #233a50;
    border: 2px solid #233a50;
  }
`;
