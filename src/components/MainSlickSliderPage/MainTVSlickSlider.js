import React, {useState} from 'react';
import Slider from "react-slick";
import { useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import notFound from '../../image/not found.jpg'

const MainTvSlickSlider = ({tv}) => {
    const navigate = useNavigate()
    const [directory, setDirectory] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 448,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <div className='content-slick-slider-page'>
            <Slider {...settings}>
                {
                    tv.slice(0, 12).map((tv) => {
                        const onClick = (e) => {
                            if (Math.abs(e.clientX - directory) < 5) {
                                navigate(`/tv-serials/serials-info/${tv.id}`)
                            }
                        }
                        return (
                            <div key={tv.id}>
                                    <button onMouseDown={(e) => setDirectory(e.clientX)} onClick={onClick} className='content-slick-slider slider-btn'>
                                        <div className='content-slick-slider-box-img'>
                                            <img className='content-slick-slider-img' src={ tv.poster_path ? "https://image.tmdb.org/t/p/w500" + tv.poster_path : notFound }
                                                 alt={tv.name}/>
                                        </div>
                                        <div className='content-slick-slider-title'>{tv.name}</div>
                                        <div className='content-slick-slider-block'>
                                            <span className='content-slick-slider-star'> <FontAwesomeIcon icon={faStar}/><span className='content-slick-slider-popular'>{tv.vote_average}<span className='content-slick-slider-max-popular'>/10</span></span></span>
                                        </div>
                                    </button>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

    );
};

export default MainTvSlickSlider;