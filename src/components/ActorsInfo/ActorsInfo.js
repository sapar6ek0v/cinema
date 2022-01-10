import React, {useContext, useEffect, useRef, useState} from 'react';
import './actors-info.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const ActorsInfo = ({actor, loading}) => {
    const ref = useRef(null)
    const [showBiography, setShowBiography] = useState(false)

    useEffect(() => {
        if (!loading) {
            if (parseInt(window.getComputedStyle(ref.current).height) < 300) {
                setShowBiography(true)
            }
            console.log(ref.current)
        }
    }, [loading])

    return (
        <div >
            <h2 className='actors-name'>
                {actor.name}
            </h2>
            <div ref={ref} className={`actors-item position-relative ${!showBiography && 'un-show-biography'}`}>
                <h4 className='actors-sub-title'>Biography</h4>
                <p>{actor.biography}</p>
                {/*<div hidden={actor.biography.length < 1100  || showBiography} className='show-biography'></div>*/}
                <div hidden={showBiography} className='show-biography'></div>
            </div>
            {/*{actor.biography.length < 1100  || <button hidden={showBiography} onClick={() => setShowBiography(true)}>More <FontAwesomeIcon icon={faAngleRight}/></button>}*/}
            <button hidden={showBiography} onClick={() => setShowBiography(true)}>More <FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
    );
};

export default ActorsInfo;