import React from 'react';
import {Link} from "react-router-dom";

const FilmsRecommendation = ({recommendation}) => {
    return (
        <div className='credits-box'>
           <div className='px-5 rec-pd'>
               <h3 className='actors-title'>#Recommendation</h3>
               <div className='d-flex overflow-auto md-rec-block'>
                   {
                       recommendation.map(it => {
                           return (
                               <div className=' col-md-4  text-center md-col-3'>
                                   <div className="block">
                                       <Link to={`/movie-info/${it.id}`} className='text-decoration-none text-black md-rec-link '>
                                           <img className='film-img'
                                                src={"https://image.tmdb.org/t/p/w500" + it.poster_path} alt={it.title}/>
                                           <div className='d-flex align-items-center'>
                                               <div className='content-slick-slider-title'>{it.title}</div>
                                               <div className='film-popular'>{(it.vote_average * 10).toFixed(0)}%</div>
                                           </div>
                                       </Link>
                                   </div>
                               </div>
                           )
                       })
                   }
               </div>
           </div>
        </div>
    );
};

export default FilmsRecommendation;