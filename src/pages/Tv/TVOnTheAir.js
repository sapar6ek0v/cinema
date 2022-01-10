import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainTvSlickSlider from "../../components/MainSlickSliderPage/MainTVSlickSlider";
import Loading from "../../components/Loading/Loading";

const TvOnTheAir = () => {
    const [tvOnTheAir, setTvOnTheAir] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios(`${URL_BASE}/tv/on_the_air?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setTvOnTheAir(data.results)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return  <Loading />
    }

    return (
        <div>
            <MainTvSlickSlider tv={tvOnTheAir} />
        </div>
    );
};

export default TvOnTheAir;