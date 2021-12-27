import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const TheRandomNowPlayingFilms = () => {
    const [films, setFilms] =useState([])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`)
            .then(({data}) => {
                setFilms(data.results)
            })
    } ,[])
    return (
        <Container>
            <Row >
                {
                    films.map( film => {
                        // export const filmImg = ("https://image.tmdb.org/t/p/w500" + film.poster_path)

                        const input = film.release_date.split('-')
                        const data = input.slice(0,1);
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                                <div className='block'>
                                    <Link to={`/now_playing/${film.id}`} className='text-decoration-none text-black' >
                                        <img className='film-img' src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt=""/>
                                        <div  className='film-popular'>{film.vote_average}/10</div>
                                        <div  className='slider-text'>{film.title}</div>
                                        <div className='slider-date'>({data})</div>
                                    </Link>
                                </div>
                            </div>
                        )

                    })
                }
            </Row>
        </Container>
    );
};

export default TheRandomNowPlayingFilms;