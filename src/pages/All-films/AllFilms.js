import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../constants/api";
import Pages from "../../components/Pages/Pages";

const AllFilms = () => {
    const [pages, setPages] = useState(1)
    const [getFilms, setGetFilms] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=${pages}`)
            .then(({data}) => {
                setGetFilms(data.results)
            })
    }, [pages])

    return (
        <>
            <Pages pages={pages} getFilms={getFilms} setPages={setPages} />
        </>
    );
};

export default AllFilms;