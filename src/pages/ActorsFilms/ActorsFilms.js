import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import axios from "axios";
import next from '../../image/icons (1).png'
import notFound from '../../image/not found.jpg'
import {Row} from "react-bootstrap";

const ActorsFilms = () => {
    const {id} = useParams()
    const [films, setFilms] = useState(10)
    const [actorsFilms, setActorsFilm] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}/movie_credits?api_key=${API_KEY}`)
            .then(({data}) => {
                setActorsFilm(data.cast)
            })
    }, [id])

    return (
        <div >
            <h3 className='credits-rule-title'>Фильмы с участием :</h3>
            <div>

                <Row>
                    {
                        actorsFilms?.slice(0,films).map(film => {
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
                <div>
                    {
                        films < actorsFilms.length && <div  className='next-box'>
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
        </div>
    );
};

export default ActorsFilms;