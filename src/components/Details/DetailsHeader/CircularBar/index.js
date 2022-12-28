import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { colors } from '../../../../constants/colors';
import { CircularBarTitle, CircularBarWrapper } from './styles';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = ({ item, size = '22' }) => {
  return (
    <CircularBarWrapper>
      <CircularProgressbar
        value={(item.vote_average * 10).toFixed(2) || 0}
        text={`${(item.vote_average * 10).toFixed(2) || 0}%`}
        styles={buildStyles({
          textSize: `${size}px`,
          rotation: 0.25,
          pathTransitionDuration: 2.5,
          pathColor: `${colors.pathBlue}`,
          trailColor: `${colors.lightBlue}`,
          backgroundColor: `${colors.lightBlue}`,
        })}
      />
      <CircularBarTitle>Custom check</CircularBarTitle>
    </CircularBarWrapper>
  );
};

export default CircularBar;
