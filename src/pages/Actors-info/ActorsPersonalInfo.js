import React from 'react';
import AboutActors from "../../components/About - actors/AboutActors";

const ActorsPersonalInfo = ({actor}) => {
    return (
            <div className='actors-about-box t'>
                <div>
                    <h3 className='actors-name'>Personal information</h3>
                    <AboutActors title={'Known for department'} text={actor.known_for_department}/>
                    <AboutActors title={'Birthday'} text={actor.birthday}/>
                    <AboutActors title={'Place of birth'} text={actor.place_of_birth}/>
                    <AboutActors title={'Also known as'} text={actor.also_known_as}/>
                </div>
            </div>
    );
};

export default ActorsPersonalInfo;