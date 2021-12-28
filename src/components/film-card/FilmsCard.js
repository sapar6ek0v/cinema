import React from 'react';
import {Link} from "react-router-dom";

const FilmsCard = ({film}) => {
    const input = film.release_date.split('-')
    const data = input.slice(0, 1);
    return (
            <div  className='col-sm-6 col-md-4 col-lg-3 text-center'>
                <div className="block">
                    <Link to={`/movie-info/${film.id}`} className='text-decoration-none text-black'>
                        <img className='film-img'
                             src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt=""/>
                        <div className='film-popular'>{film.vote_average}/10</div>
                        <div className='slider-text'>{film.title}</div>
                        <div className='slider-date'>({data})</div>
                        {/*<div>Жанры: {film.genres?.map(it => {*/}
                        {/*    return (*/}
                        {/*        <span>{it.name},</span>*/}
                        {/*    )*/}
                        {/*})}</div>*/}
                    </Link>
                </div>
            </div>
    );
};

export default FilmsCard;