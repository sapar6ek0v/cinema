import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import MainSlickSlider from "../MainSlickSliderPage/MainSlickSlider";

const CreditsMovie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}/movie_credits?api_key=${API_KEY}`)
            .then(({data}) => {
                setMovie(data.cast)
            })
    } , [id])

    return (
        <div>
            <MainSlickSlider films={movie}/>
        </div>
    );
};

export default CreditsMovie;