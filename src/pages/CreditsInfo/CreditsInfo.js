import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import ActorsInfo from "../../components/ActorsInfo/ActorsInfo";
import ActorsPersonalInfo from "../../components/ActorsInfo/ActorsPersonalInfo";
import CreditsMovie from "../../components/Credits/CreditsMovie";
import CreditsTv from "../../components/Credits/CreditsTv";
import CreditsPhotos from "../../components/Credits/CreditsPhotos";
import Loading from "../../components/Loading/Loading";
import Media from "../../components/Media/Media";

const CreditsInfo = () => {
    const activeBtn = document.querySelector('.active')
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [active, setActive] = useState(activeBtn)
    const [media, setMedia] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const prom1 = axios(`${URL_BASE}/person/${id}?api_key=${API_KEY}`)
            .then(({data}) => {
                setActor(data)
            })

        const prom2 = axios(`${URL_BASE}/person/${id}/external_ids?api_key=${API_KEY}`)
            .then(({data}) => {
                setMedia(data)
            })

        Promise.all([prom1, prom2])
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }, [id])


    const toggleContent = (event) => {
        setActive(event)
    }

    const switchContent = (value) => {
        switch (value) {
            case 'overview':
                return <ActorsInfo actor={actor} loading={loading}/>
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

    if (loading) {
        return <Loading />
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
                            <Media media={media} />
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