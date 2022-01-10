import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import Pages from "../../components/Pages/Pages";
import {useSearchParams} from "react-router-dom";




const UpcomingFilms = () => {
    const [query, setQuery] = useSearchParams()
    const [pages, setPages] = useState(+query.get('page') || 1)
    const [upcomingFilms, setUpcomingFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setUpcomingFilms(data.results)
            })
    }, [pages])

    return (
        <div>
            <Pages pages={pages} getFilms={upcomingFilms} setPages={setPages} setQuery={setQuery}/>
        </div>
    );
};

export default UpcomingFilms;