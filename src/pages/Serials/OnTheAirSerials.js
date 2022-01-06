import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useSearchParams} from "react-router-dom";
import SerialPages from "../../components/Pages/SerialPages";

const OnTheAirSerials = () => {
    const [query, setQuery] = useSearchParams()
    const [page, setPage] = useState(+query.get('page') || 1)
    const [onTheAirSer, setOnTheAirSer] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(({data}) => {
                setOnTheAirSer(data.results)
            })
    }, [page])


    return (
        <>
            <SerialPages pages={page} setPages={setPage} getSerials={onTheAirSer} setQuery={setQuery} />
        </>
    );
};

export default OnTheAirSerials;