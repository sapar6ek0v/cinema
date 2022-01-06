import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import Pages from "../../components/Pages/Pages";
import {useSearchParams} from "react-router-dom";

const PopularFilms = () => {
    const [query, setQuery] = useSearchParams()
    const [pages, setPages] = useState(+query.get('page') || 1)
    const [popularFilms, setPopularFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setPopularFilms(data.results)
            })
    }, [pages])

    return (
        <>
            <Pages pages={pages} getFilms={popularFilms} setPages={setPages} setQuery={setQuery}/>
        </>
    );
};

export default PopularFilms;