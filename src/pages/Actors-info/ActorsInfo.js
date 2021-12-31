import React from 'react';

const ActorsInfo = ({actor}) => {
    return (
        <>
            <h2 className='actors-name'>
                {actor.name}
            </h2>
            <div>
                <h4>Biography</h4>
                {actor.biography}
            </div>
        </>
    );
};

export default ActorsInfo;