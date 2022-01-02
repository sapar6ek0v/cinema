import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import MainSlickSlider from "../MainSlickSliderPage/MainSlickSlider";

const SlickUpcoming = () => {
    const [upcomingFilms, setUpcomingFilms] = useState([])


    useEffect(() => {
        axios(`${URL_BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setUpcomingFilms(data.results)
            })
    }, [])
    return (
        <>
          <MainSlickSlider films={upcomingFilms}/>
        </>
    );
};

export default SlickUpcoming;