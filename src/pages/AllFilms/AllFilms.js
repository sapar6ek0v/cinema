import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../constants/api";
import Pages from "../../components/Pages/Pages";
import Loading from "../../components/Loading/Loading";
import {useSearchParams} from "react-router-dom";

const AllFilms = () => {
    const [query, setQuery] = useSearchParams()
    const [pages, setPages] = useState(+query.get("page") || 1)
    const [getFilms, setGetFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=${pages}`)
            .then(({data}) => {
                setGetFilms(data.results)
                setLoading(false)
            })
    }, [pages])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Pages pages={pages} getFilms={getFilms} setPages={setPages} setQuery={setQuery}/>
        </>
    );
};

export default AllFilms;