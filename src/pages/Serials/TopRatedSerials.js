import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useSearchParams} from "react-router-dom";
import SerialPages from "../../components/Pages/SerialPages";

const TopRatedSerials = () => {
    const [query, setQuery] = useSearchParams()
    const [page, setPage] = useState(+query.get('page') || 1)
    const [topRatedSer, setTopRatedSer] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(({data}) => {
                setTopRatedSer(data.results)
            })
    }, [page])


    return (
        <>
            <SerialPages pages={page} setPages={setPage} setQuery={setQuery} getSerials={topRatedSer} />
        </>
    );
};

export default TopRatedSerials;