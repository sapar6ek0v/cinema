import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import Pages from "../../components/Pages/Pages";
import {useSearchParams} from "react-router-dom";

const TopRated = () => {
    const [query, setQuery] = useSearchParams()
    const [pages, setPages] = useState(+query.get('page') || 1)
    const [topRatedFilms, setTopRatedFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setTopRatedFilms(data.results)
            })
    }, [pages])
    return (
        <div>
            <Pages pages={pages} getFilms={topRatedFilms} setPages={setPages} setQuery={setQuery}/>
        </div>
    );
};

export default TopRated;