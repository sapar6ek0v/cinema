import React, {useState} from 'react';
import './actors-info.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const ActorsInfo = ({actor}) => {
    const [showBiography, setShowBiography] = useState(false)



    return (
        <div >
            <h2 className='actors-name'>
                {actor.name}
            </h2>
            <div className={`actors-item position-relative ${!showBiography && 'un-show-biography'}`}>
                <h4 className='actors-sub-title'>Biography</h4>
                <p>{actor.biography}</p>
                <div hidden={actor.biography.length < 1100  || showBiography} className='show-biography'></div>
            </div>
            {actor.biography.length < 1100  || <button hidden={showBiography} onClick={() => setShowBiography(true)}>More <FontAwesomeIcon icon={faAngleRight}/></button>}
        </div>
    );
};

export default ActorsInfo;