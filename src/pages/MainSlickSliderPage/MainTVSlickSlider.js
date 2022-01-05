import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import notFound from '../../image/not found.jpg'

const MainTvSlickSlider = ({tv}) => {

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
                    tv.slice(0, 12).map((tv) => {
                        return (
                            <div key={tv.id}>
                                <div className='content-slick-slider-box'>
                                    <Link to={`/tv-serials/serials-info/${tv.id}`} className='content-slick-slider'>
                                        <div className='content-slick-slider-box-img'>
                                            <img className='content-slick-slider-img' src={ tv.poster_path ? "https://image.tmdb.org/t/p/w500" + tv.poster_path : notFound }
                                                 alt={tv.name}/>
                                        </div>
                                        <div className='content-slick-slider-title'>{tv.name}</div>
                                        <div className='content-slick-slider-block'>
                                            <span className='content-slick-slider-star'> <FontAwesomeIcon icon={faStar}/><span className='content-slick-slider-popular'>{tv.vote_average}<span className='content-slick-slider-max-popular'>/10</span></span></span>
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

export default MainTvSlickSlider;