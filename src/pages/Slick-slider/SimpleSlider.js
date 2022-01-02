import Slider from "react-slick";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function SimpleSlider() {
    const [windowFilm, setWindowFilm] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`)
            .then(({data}) => {
                setWindowFilm(data.results)
            })
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    }
    return (
        <>
            <Slider {...settings}>
                {
                    windowFilm.map(it => {
                        const input = it.release_date.split('-')
                        const data = input.slice(0,1);
                        return (

                            <div key={it.id}>
                                <div className='block'>
                                    <Link to={`/movie-info/${it.id}`} className='slider-box'>
                                        <img className='w-100' src={"https://image.tmdb.org/t/p/w500" + it.poster_path}
                                             alt={it.title}/>
                                        <div className='slider-text'>{it.title}</div>
                                        <div className='slider-popular'>
                                            {it.vote_average}
                                        </div>
                                        <span className='slider-date'>({data})</span>
                                    </Link>
                                </div>
                            </div>

                        )
                    })

                }
            </Slider>
        </>
    );
}