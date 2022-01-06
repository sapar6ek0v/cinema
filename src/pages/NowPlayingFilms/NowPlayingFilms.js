import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container} from "react-bootstrap";
import {Link, useSearchParams} from "react-router-dom";
import {API_KEY} from "../../constants/api";
import Pages from "../../components/Pages/Pages";
const NowPlayingFilms = () => {
    const [query, setQuery] = useSearchParams()
    const [pages, setPage] = useState(+query.get('page') || 1)
    const [films, setFilms] = useState([])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ru&page=${pages}`)
            .then(({data}) => {
                setFilms(data.results)
            })
    }, [pages])
    return (
       <>
         <Pages pages={pages} setPages={setPage} setQuery={setQuery} getFilms={films} />
       </>
    );
}

export default NowPlayingFilms;