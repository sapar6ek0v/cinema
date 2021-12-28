import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import FilmsCard from "../../components/film-card/FilmsCard";
const NowPlayingFilms = () => {
    const [films, setFilms] = useState([])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`)
            .then(({data}) => {
                setFilms(data.results)
            })
    }, [])
    return (
        <Container>
            <Row>
                {
                    films.map(film => {
                        return (
                            <FilmsCard key={film.id} film={film}/>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default NowPlayingFilms;