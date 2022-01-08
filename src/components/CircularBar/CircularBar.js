import React from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const CircularBar = ({item}) => {
    return (
            <div className='films-info-circ-bar d-flex align-items-center'>
                <CircularProgressbar value={item.vote_average * 10 || 0} text={`${item.vote_average * 10 || 0}%`} styles={buildStyles({
                    textSize: '22px',
                    pathTransitionDuration: 2.5,
                    // textColor: '#020d18',
                    pathColor: `rgba(62, 152, 199,0.3)`,
                    trailColor: '#233a50',
                    backgroundColor: '#233a50',
                })}/>
                <div className='films-info-circ-bar-til'>
                    Custom
                    check
                </div>
            </div>
    );
};

export default CircularBar;