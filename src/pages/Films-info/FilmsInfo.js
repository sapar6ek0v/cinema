import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import Credits from "../Credits/Credits";
import {API_KEY, URL_BASE} from "../../constants/api";
import Trailers from "../Trailers/Trailers";
import StartTrailers from "../Trailers/StartTrailers";
import Creators from "../Creators/Creators";
import notFound from '../../image/not found.jpg'

const FilmsInfo = () => {
    const {id} = useParams()
    const [film, setFilm] = useState({})
    const [videos, setVideos] = useState([])
    const [modal, setModal] = useState(false)
    const [videoKey, setVideoKey] = useState('')

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4eb03517df3f1b8227a751b8d89d9ee8&language=ru`)
            .then(({data}) => {
                setFilm(data)
            })



        axios(`${URL_BASE}/movie/${id}/videos?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setVideos(data.results)
            })
    }, [id])

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [modal])


    const input = film.release_date?.split('-')
    const output = input?.slice(0, 1)

    const turnOn = (key) => {
        setVideoKey(key)
        setModal(true)
    }

    return (

        <div key={film.id} className='about-film'>

            <>
                <div className='info' style={{
                    background: `rgba(0,0,0,0.7) url(https://image.tmdb.org/t/p/original/${film.backdrop_path}) center/cover`,
                    backgroundBlendMode: 'darken'
                }}>
                    <Container>
                        <div className='d-flex'>
                            <div className='title-block col-4'>
                                <div className='film-info-box'>
                                    {
                                        film?.poster_path ?
                                            <img className='film-info-img' src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt='film'/>
                                            : <img src={notFound} alt='not-found'/>
                                    }
                                </div>
                            </div>
                            <div className='col-8'>
                                <div className='film-title w-75'>{film.original_title}
                                    <span className='film-date'>({output})</span>
                                </div>
                                <div className='film-sub-title'>
                                    <span className='film-pod-title'>Время : </span>
                                    {film.runtime}мин
                                </div>
                                <div className='film-sub-title'>
                                    <span className='film-pod-title'>Жанры : </span>
                                    {film.genres?.map(it => {
                                        return (
                                            <span className='film-sub-title'>
                                            {it.name}, </span>
                                        )
                                    })}</div>

                                <div className='info-block'>
                                    <h3 className='h3'>Обзор</h3>
                                    <div>
                                        {film.overview ? film.overview : 'Sorry but we don\'t have information about this movie yet'}
                                    </div>
                                </div>
                                <Creators />
                            </div>
                        </div>
                    </Container>

                </div>
                <Credits/>
                <StartTrailers film={film} videos={videos} turnOn={turnOn}/>
            </>
            {modal && <Trailers setModal={setModal} videoKey={videoKey} />}
        </div>
    );
};

export default FilmsInfo;