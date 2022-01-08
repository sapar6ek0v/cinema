import React from 'react';
import {Link} from "react-router-dom";

const FilmsRecommendation = ({recommendation}) => {
    return (
        <div className='credits-box'>
           <div className='px-5'>
               <h3 className='actors-title'>#Recommendation</h3>
               <div className='d-flex overflow-auto'>
                   {
                       recommendation.map(it => {
                           return (
                               <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                                   <div className="block">
                                       <Link to={`/movie-info/${it.id}`} className='text-decoration-none text-black'>
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