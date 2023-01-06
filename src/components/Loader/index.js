import React from 'react';
import { LoaderWrapper, Line } from './styles';

const Loader = ({ bg = 'transparent', fixedCenter = false }) => {
  return (
    <LoaderWrapper bg={bg} fixedCenter={fixedCenter}>
      <Line>
        <Line>
          <Line>
            <Line>
              <Line>
                <Line>
                  <Line></Line>
                </Line>
              </Line>
            </Line>
          </Line>
        </Line>
      </Line>
    </LoaderWrapper>
  );
};

export default Loader;
