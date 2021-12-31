import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {Link, useParams} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import AboutActors from "../../components/About - actors/AboutActors";
import ActorsInfo from "../Actors-info/ActorsInfo";

const CreditsInfo = () => {
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [actorsFilms, setActorsFilm] = useState([])
    const [nav, setNav] = useState(<ActorsInfo/>)

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}?api_key=${API_KEY}`)
            .then(({data}) => {
                setActor(data)
            })

        axios(`${URL_BASE}/person/${id}/movie_credits?api_key=${API_KEY}`)
            .then(({data}) => {
                setActorsFilm(data.cast)
            })

        axios(`${URL_BASE}/person/po?api_key=${API_KEY}`)
            .then(({data}) => {
                setActorsFilm(data.cast)
            })
    }, [id])

    // const onClick = () => {
    //     setNav(nav + 1)
    // }

    return (
        <div className='credits-box'>
            <Container>
                <div className='d-flex '>
                    <div className='actors-photo-box'>
                        <img className='actors-image' src={`${PHOTO_BASE}${actor.profile_path}`} alt={actor.name}/>
                    </div>

                    <div className='tabs'>
                        <ul className='tab-links tabs-mv'>
                            {/*<button onClick={() => onClick(<ActorsInfo/>)} className='li'>*/}
                            {/*    Overview*/}
                            {/*</button>*/}
                            {/*<button  onClick={() => setNav(nav + 2)}  className='li'>*/}
                            {/*    Personal information*/}
                            {/*</button>*/}
                            {/*<button  onClick={onClick}  className='li'>*/}
                            {/*    Movies*/}
                            {/*</button>*/}
                        </ul>
                    </div>
                    <div className='actors-about-box'>
                        <div>
                            <h3 className='fw-bold'>Personal information</h3>
                            <AboutActors title={'Known for department'} text={actor.known_for_department}/>
                            <AboutActors title={'Birthday'} text={actor.birthday}/>
                            <AboutActors title={'Place of birth'} text={actor.place_of_birth}/>
                            <AboutActors title={'Also known as'} text={actor.also_known_as}/>
                        </div>


                    </div>
                </div>
                <div>
                    <h3>Фильмы с участием</h3>
                    <Row>
                        {
                            actorsFilms?.map(film => {
                                return (
                                    <div className='col-sm-6 col-md-4 col-xl-3'>
                                        <div className='block'>
                                            <Link to={`/movie-info/${film.id}`}>
                                                <div>{film.title}</div>
                                                <div>{film.release_date}</div>
                                                <img className='w-100' src={`${PHOTO_BASE}${film.poster_path}`} alt={film.title}/>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CreditsInfo;