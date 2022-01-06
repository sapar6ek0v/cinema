import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
const NowPlayingFilms = () => {
    const [films, setFilms] = useState([])


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru&&page=1`)
            .then(({data}) => {
                setFilms(data.results)
            })
    }, [])
    return (
       <div className='films-card-page'>
           <Container>
               <div className='d-flex overflow-auto'>
                   {
                       films.map(film => { const input = film.release_date.split('-')
                           const data = input.slice(0, 1);
                           return (
                               <div  className='films-card'>
                                   <div className="block">
                                       <Link to={`/movie-info/${film.id}`} className='text-decoration-none text-black'>
                                           <img className='film-img'
                                                src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt=""/>
                                           <div className='films-sub-card'>
                                               {/*<div className='films-card-percent-box'>*/}
                                               {/*    <span className='films-card-percent'>*/}
                                               {/*        {film.vote_average * 10}%*/}
                                               {/*    </span>*/}
                                               {/*</div>*/}
                                               <div className='films-card-title'>{film.title}</div>
                                               <div className='films-card-text'>({data})</div>
                                           </div>
                                       </Link>
                                   </div>
                               </div>
                           )
                       })
                   }
               </div>
           </Container>
       </div>
    );
}

export default NowPlayingFilms;