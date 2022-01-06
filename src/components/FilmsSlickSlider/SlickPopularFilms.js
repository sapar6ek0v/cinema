import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainSlickSlider from "../MainSlickSliderPage/MainSlickSlider";



const SlickPopularFilms = () => {
    const [popularFilms, setPopularFilms] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setPopularFilms(data.results)
            })
    }, [])



    return (
        <>
            <MainSlickSlider films={popularFilms}/>
        </>
    );
};

export default SlickPopularFilms;