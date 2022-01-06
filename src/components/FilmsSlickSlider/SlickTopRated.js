import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainSlickSlider from "../MainSlickSliderPage/MainSlickSlider";

const SlickTopRated = () => {
    const [topRatedFilms, setTopRatedFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setTopRatedFilms(data.results)
            })
    }, [])

    return (
        <>
            <MainSlickSlider films={topRatedFilms} />
        </>
    );
};

export default SlickTopRated;