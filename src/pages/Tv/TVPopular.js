import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainTvSlickSlider from "../../components/MainSlickSliderPage/MainTVSlickSlider";
import Loading from "../../components/Loading/Loading";

const TvPopular = () => {
    const [tvPop, setTvPop] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios(`${URL_BASE}/tv/popular?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setTvPop(data.results)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return  <Loading />
    }

    return (
        <div>
            <MainTvSlickSlider tv={tvPop} />
        </div>
    );
};

export default TvPopular;