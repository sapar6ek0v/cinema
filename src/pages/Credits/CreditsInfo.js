import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import ActorsFilms from "../ActorsFilms/ActorsFilms";
import ActorsInfo from "../Actors-info/ActorsInfo";
import ActorsPersonalInfo from "../Actors-info/ActorsPersonalInfo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import CreditsMovie from "./CreditsMovie";
import CreditsTv from "./CreditsTv";
import CreditsPhotos from "./CreditsPhotos";

const CreditsInfo = () => {
    const activeBtn = document.querySelector('.active')
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [active, setActive] = useState(activeBtn)
    const [media, setMedia] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}?api_key=${API_KEY}`)
            .then(({data}) => {
                setActor(data)
            })

        axios(`${URL_BASE}/person/${id}/external_ids?api_key=${API_KEY}`)
            .then(({data}) => {
                setMedia(data)
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
                return <ActorsPersonalInfo actor={actor}/>
            case 'media':
                return <CreditsPhotos />
            case 'more':
                return <div>
                    <p>More Content Here</p>
                </div>;
            default:
                return <ActorsInfo actor={actor}/>
        }
    }

    const switchActorFilms = (value) => {
        switch (value) {
            case 'movie':
                return <CreditsMovie/>
            case 'tv':
                return <CreditsTv />
            default:
                return <CreditsMovie />
        }
    }

    return (
        <>
            <div className='credits-page'>
                <Container>
                    <div className='d-flex actors-box'>
                        <div className='actors-photo-box'>
                            <img className='actors-image' src={`${PHOTO_BASE}${actor.profile_path}`} alt={actor.name}/>
                        </div>

                        <div>

                            <div className='actors-sg-tl'>{actor.name}</div>
                            <div className='actor-media-block'>
                                <a className='actor-link' target='_blank' href={media.instagram_id ? `https://www.instagram.com/${media.instagram_id}/` : "https://www.instagram.com/" }><FontAwesomeIcon icon={faInstagram}/></a>
                                <a className='actor-link' target='_blank' href={media.facebook_id ? `https://www.facebook.com/${media.facebook_id}/` : 'https://www.facebook.com/'}><FontAwesomeIcon icon={faFacebook}/></a>
                                <a className='actor-link' target='_blank' href={media.twitter_id ? `https://twitter.com/${media.twitter_id}/` : 'https://twitter.com/'}><FontAwesomeIcon icon={faTwitter}/></a>
                            </div>

                            <div className="d-flex mb-4 actors-buttons">
                                <button className='link-button' value="overview"
                                        onClick={() => toggleContent('overview')}>
                                    overview
                                </button>
                                <button className='link-button' value="personal-information"
                                        onClick={() => toggleContent('personal-information')}>
                                    personal - information
                                </button>
                                <button className='link-button' value="media"
                                        onClick={() => toggleContent('media')}>
                                    Media
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


            <div className='actors-film-page'>
                <Container>
                    <div>
                        <h3 className='content-title credits-btn-title'>FILMOGRAPHY</h3>
                        <div>
                            <button onClick={() => toggleContent('movie')} value='movie' className='content-btn credits-btn-item' type="button">#Movie</button>
                            <button onClick={() => toggleContent('tv')} value='tv' className='content-btn credits-btn-item' type="button">#TV</button>
                        </div>
                        {switchActorFilms(active)}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CreditsInfo;