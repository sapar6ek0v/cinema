import React from 'react';

const AboutActors = ({text, title}) => {
    return (
        <div className='mb-3 actors-box'>
            <div className='actors-about-titres'>{title}</div>
            <div>{text}</div>
        </div>
    );
};

export default AboutActors;