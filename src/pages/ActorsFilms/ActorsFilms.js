import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import axios from "axios";
import next from '../../image/icons (1).png'
import prev from '../../image/icons (2).png'
import notFound from '../../image/not found.jpg'
import {Row} from "react-bootstrap";

const ActorsFilms = () => {
    const {id} = useParams()
    const [backFilms, setBackFilms] = useState(0)
    const [films, setFilms] = useState(10)
    const [actorsFilms, setActorsFilm] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}/movie_credits?api_key=${API_KEY}`)
            .then(({data}) => {
                setActorsFilm(data.cast)
            })
    }, [])

    return (
        <div >
            <h3 className='credits-rule-title'>Фильмы с участием :</h3>
            <div>
                {
                    films > actorsFilms.length && <div className='d-flex align-items-center justify-content-center'>
                        <button onClick={() => setFilms(films - 10)} className='actors-button margin-btn'>
                            <span >
                                <img className='actors-button-img' src={prev} alt="next"/>
                            </span>
                            PREV
                        </button>
                    </div>
                }

                <Row>
                    {
                        actorsFilms?.slice(backFilms,films).map(film => {
                            const date = film.release_date.slice(0,4)
                            return (
                                <div key={film.id} className='credits-card'>
                                        <Link className='link' to={`/movie-info/${film.id}`}>
                                            <img className='credits-img' src={film.poster_path ? `${PHOTO_BASE}${film.poster_path}` : notFound} alt={film.title}/>
                                            <div className='credits-title'>{film.title}</div>
                                            <div className='credits-date'>({film.release_date ? date : 'not found'})</div>
                                        </Link>
                                </div>
                            )
                        })
                    }
                </Row>
                {
                    films < actorsFilms.length && <div className='d-flex align-items-center justify-content-center'>
                        <button onClick={() => setFilms(films + 10 || actorsFilms - 1 )} className='actors-button'>
                            NEXT
                            <span>
                                <img className='actors-button-img' src={next} alt="next"/>
                            </span>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ActorsFilms;