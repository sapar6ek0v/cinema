import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: #20232a;
  display: flex;
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};
  gap: ${(props) => props.gap && `${props.gap}px`};
`;
