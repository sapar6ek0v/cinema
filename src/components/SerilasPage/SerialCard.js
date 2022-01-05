import React from 'react';
import {Link} from "react-router-dom";

const SerialCard = ({serial}) => {
    const input = serial?.first_air_date?.split('-')
    const data = input?.slice(0, 1);
    return (
        <div  className='col-sm-6 col-md-4 col-lg-3 text-center'>
            <div className="block">
                <Link to={`/tv-serials/serials-info/${serial.id}`} className='text-decoration-none text-black'>
                    <img className='film-img'
                         src={"https://image.tmdb.org/t/p/w500" + serial?.poster_path} alt=""/>
                    <div className='film-popular'>{serial?.vote_average}/10</div>
                    <div className='slider-text'>{serial?.name}</div>
                    <div className='slider-date'>({data})</div>
                </Link>
            </div>
        </div>
    );
};

export default SerialCard