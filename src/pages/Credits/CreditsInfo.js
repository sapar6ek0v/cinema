import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import ActorsFilms from "../ActorsFilms/ActorsFilms";
import ActorsInfo from "../Actors-info/ActorsInfo";
import ActorsPersonalInfo from "../Actors-info/ActorsPersonalInfo";

const CreditsInfo = () => {
    const activeBtn = document.querySelector('.active')
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [active, setActive] = useState(activeBtn)

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}?api_key=${API_KEY}`)
            .then(({data}) => {
                setActor(data)
            })

    }, [id])


    const toggleContent = (event) => {
        setActive(event)
    }

    const switchContent = (value) => {
        switch (value) {
            case 'overview':
                return <ActorsInfo actor={actor}/>
            case 'personal-information':
                return <div>
                    <ActorsPersonalInfo actor={actor}/>
                </div>;
            case 'films':
                return <ActorsFilms />
            case 'more':
                return <div>
                    <p>More Content Here</p>
                </div>;
            default:
                return <ActorsInfo actor={actor}/>
        }
    }

    return (
        <div className='credits-box'>
            <Container>
                <div className='d-flex actors-box'>
                    <div className='actors-photo-box'>
                        <img className='actors-image' src={`${PHOTO_BASE}${actor.profile_path}`} alt={actor.name}/>
                    </div>

                    <div>
                        <div className="d-flex mb-4">
                            <button className='link-button' value="overview"
                                    onClick={() => toggleContent('overview')}>
                                overview
                            </button>
                            <button className='link-button' value="personal-information"
                                    onClick={() => toggleContent('personal-information')}>
                                personal - information
                            </button>
                            <button className='link-button' value="films"
                                    onClick={() => toggleContent('films')}>
                                Films
                            </button>
                            <button className='link-button' value="more"
                                    onClick={() => toggleContent('more')}>+ More
                            </button>
                        </div>
                        <>
                            {switchContent(active)}
                        </>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CreditsInfo;