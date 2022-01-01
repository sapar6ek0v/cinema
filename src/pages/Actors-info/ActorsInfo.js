import React from 'react';

const ActorsInfo = ({actor}) => {
    return (
        <div >
            <h2 className='actors-name'>
                {actor.name}
            </h2>
            <div className='actors-item'>
                <h4 className='actors-sub-title'>Biography</h4>
                {actor.biography}
            </div>
        </div>
    );
};

export default ActorsInfo;