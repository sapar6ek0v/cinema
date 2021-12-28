import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import Pages from "../../components/Pages/Pages";

const PopularFilms = () => {
    const [pages, setPages] = useState(1)
    const [popularFilms, setPopularFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setPopularFilms(data.results)
            })
    }, [pages])

    return (
        <>
            <Pages pages={pages} getFilms={popularFilms} setPages={setPages} />
        </>
    );
};

export default PopularFilms;