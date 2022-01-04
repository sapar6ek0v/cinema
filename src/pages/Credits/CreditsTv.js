import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainTvSlickSlider from "../MainSlickSliderPage/MainTVSlickSlider";

const CreditsTv = () => {
    const {id} = useParams()
    const [tv, setTv] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/person/${id}/tv_credits?api_key=${API_KEY}`)
            .then(({data}) => {
                setTv(data.cast)
            })
    } , [])
    return (
        <div>
            <MainTvSlickSlider tv={tv} />
        </div>
    );
};

export default CreditsTv;