import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import Trailer from "./Trailer/Trailer";

const StartTVTrailers = ({turnOn, videos}) => {
    const {id} = useParams()
    const [filmImg, setFilmImg] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/movie/${id}/images?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setFilmImg([...data.posters, ...data.backdrops])
                // console.log(filmImg)
            })
    }, [id])

    return (
        <div className='trailer-box'>
            <Container>
                <h3 className='actors-title'>#Media</h3>
                <Trailer turnOn={turnOn} videos={videos} filmImg={filmImg} />
            </Container>
        </div>
    );
};

export default StartTVTrailers;