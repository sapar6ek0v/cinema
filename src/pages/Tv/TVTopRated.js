import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainTvSlickSlider from "../MainSlickSliderPage/MainTVSlickSlider";

const TvTopRated = () => {
    const [tvTopRated, setTVTopRared] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setTVTopRared(data.results)
            })
    }, [])

    return (
        <div>
            <MainTvSlickSlider tv={tvTopRated} />
        </div>
    );
};

export default TvTopRated;