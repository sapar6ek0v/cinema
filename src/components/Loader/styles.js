import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.bg && props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(props) => props.fixedCenter && '50%'};
  left: ${(props) => props.fixedCenter && '50%'};
  transform: ${(props) => props.fixedCenter && 'translate(-50%, -50%)'};
  z-index: 10000;
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  } 
`;

export const Line = styled.div`
  border: 2px solid ${colors.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 3px;
  border-left-color: transparent;
  border-top-color: transparent;
  animation: ${rotate} 3s cubic-bezier(0.35, -0.14, 0.79, 1.22) infinite;
`;
