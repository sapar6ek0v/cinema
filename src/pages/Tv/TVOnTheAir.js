import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainTvSlickSlider from "../MainSlickSliderPage/MainTVSlickSlider";

const TvOnTheAir = () => {
    const [tvOnTheAir, setTvOnTheAir] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/on_the_air?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setTvOnTheAir(data.results)
            })
    }, [])

    return (
        <div>
            <MainTvSlickSlider tv={tvOnTheAir} />
        </div>
    );
};

export default TvOnTheAir;