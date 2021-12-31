import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import Pages from "../../components/Pages/Pages";

const UpcomingFilms = () => {
    const [pages, setPages] = useState(1)
    const [upcomingFilms, setUpcomingFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setUpcomingFilms(data.results)
            })
    }, [pages])

    return (
        <div>
            <Pages pages={pages} getFilms={upcomingFilms} setPages={setPages} />
        </div>
    );
};

export default UpcomingFilms;