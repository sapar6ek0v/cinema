import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import Pages from "../../components/Pages/Pages";

const TopRated = () => {
    const [pages, setPages] = useState(1)
    const [topRatedFilms, setTopRatedFilms] = useState([])



    useEffect(() => {
        axios(`${URL_BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pages}`)
            .then(({data}) => {
                setTopRatedFilms(data.results)
            })
    }, [pages])
    return (
        <div>
            <Pages pages={pages} getFilms={topRatedFilms} setPages={setPages} />
        </div>
    );
};

export default TopRated;