import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import notFound from '../../image/not found.jpg'

const MainSlickSlider = ({films}) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true
    }
    return (
        <div className='content-slick-slider-page'>
            <Slider {...settings}>
                {
                    films.slice(0, 11).map((film) => {
                        return (
                            <div key={film.id}>
                                <div className='content-slick-slider-box'>
                                    <Link to={`/movie-info/${film.id}`} className='content-slick-slider'>
                                        <div className='content-slick-slider-box-img'>
                                            <img className='content-slick-slider-img' src={film.poster_path ? "https://image.tmdb.org/t/p/w500" + film.poster_path : notFound}
                                                 alt={film.title}/>
                                        </div>
                                        <div className='content-slick-slider-title'>{film.title}</div>
                                        <div className='content-slick-slider-block'>
                                            <span className='content-slick-slider-star'> <FontAwesomeIcon icon={faStar}/><span className='content-slick-slider-popular'>{film.vote_average}<span className='content-slick-slider-max-popular'>/10</span></span></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

    );
};

export default MainSlickSlider;