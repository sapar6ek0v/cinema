import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import Credits from "../Credits/Credits";
import {API_KEY, URL_BASE} from "../../constants/api";

const FilmsInfo = () => {
    const {id} = useParams()
    const [film, setFilm] = useState({})
    const [producers, setProducers] = useState([])
    const jobs = ["Director", "Producer", "Screenplay"]

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&page=1`)
            .then(({data}) => {
                setFilm(data)
            })


        axios(`${URL_BASE}/movie/${id}/credits?api_key=${API_KEY}&language=ru`)
            .then(({data}) => {
                setProducers(data.crew.filter(it => jobs.includes(it.job)))
                console.log(producers)
            })
    }, [id])


    const input = film.release_date?.split('-')
    const output = input?.slice(0, 1)

    return (

        <div key={film.id} className='about'>

            <>
                <div className='info' style={{
                    background: `rgba(0,0,0,0.7) url(https://image.tmdb.org/t/p/original/${film.backdrop_path}) center/cover`,
                    backgroundBlendMode: 'darken',
                    objectFit: 'cover'
                }}>
                    <Container>
                        <div className='d-flex'>
                            <div className='title-block'>
                                <img className='img' src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt=""/>
                            </div>
                            <div>
                                <div className='film-title w-75'>{film.original_title}
                                    <span className='film-date'>{output}</span>
                                </div>
                                <div className='film-sub-title'>Время : {film.runtime}мин</div>
                                <div className='film-sub-title'>Жанры: {film.genres?.map(it => {
                                    return (
                                        <span className='film-sub-title'>{it.name}, </span>
                                    )
                                })}</div>

                                <div className='info-block'>
                                    <h3>Обзор</h3>
                                    <div>
                                        {film.overview}
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    {
                                        producers?.map(people => {
                                            return (
                                                <div key={people.id} className='px-5'>
                                                    <div>
                                                        {people.name}
                                                    </div>
                                                    <div>
                                                        {people.job}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Container>

                </div>
                <Credits/>
            </>

        </div>
    );
};

export default FilmsInfo;