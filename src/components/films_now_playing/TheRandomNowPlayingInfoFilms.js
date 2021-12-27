import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Container, Row} from "react-bootstrap";

const TheRandomNowPlayingInfoFilms = () => {
    const {id } = useParams()
    const [film, setFilm] = useState({})

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`)
            .then(({data}) => {
                setFilm(data)
            })
    }, [])

    return (
        <Container>
            <Row>
                <div className='d-flex'>
                    <div className='first-block'>
                        <img className='img' src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt=""/>
                    </div>
                    <div>
                        <div >{film.original_title}</div>
                        <div>{film.release_date}</div>
                        <div>{film.runtime}мин</div>
                        <div>Жанры: {film.genres?.map(it => {
                            return (
                                <span>{it.name},</span>
                            )
                        })}</div>

                        <div className='second-block'>
                            <h3>Обзор</h3>
                            <div>
                                {film.overview}
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default TheRandomNowPlayingInfoFilms;