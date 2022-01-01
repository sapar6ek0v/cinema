import React from 'react';

const AboutActors = ({text, title}) => {
    return (
        <div className='mb-3 actors-box actors-line'>
            <div className='actors-sub-title mb-0'>{title}</div>
            <div className='actors-pod-title'>{text}</div>
        </div>
    );
};

export default AboutActors;