import React, {useEffect, useState} from 'react';
import start from "../../image/start-video.svg";
import {Container} from "react-bootstrap";
import axios from "axios";
import {API_KEY, URL_BASE} from "../../constants/api";
import {useParams} from "react-router-dom";
import notFound from '../../image/not found.jpg'

const StartTrailers = ({turnOn, videos}) => {
    const {id} = useParams()
    const [filmImg, setFilmImg] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/movie/${id}/images?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setFilmImg(data.posters)
            })
    },[id])

    return (
        <div className='trailer-box'>
            <Container >
                <h3 className='actors-title'>Media</h3>
                <div className='d-flex overflow-auto'>
                    {
                        videos.slice(0, 2).map(video => {
                            return (
                                <button onClick={() => turnOn(video.key)} type='button' className='position-relative h-100 trailer-btn'>
                                    <img src={start} alt="" className="start-btn"/>
                                    <span className='start-play'></span>
                                    {
                                        filmImg.slice(5, 6).map(it => {
                                            return <img  src={"https://image.tmdb.org/t/p/w500" + it.file_path} alt="" className='trailer-img'/>
                                        })
                                    }
                                </button>
                            )
                        }) || <div>
                            <h3 className='text-white'>Sorry but we don't have trailers or videos about this movie yet</h3>
                            <img src={notFound} alt="trailer"/>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default StartTrailers;