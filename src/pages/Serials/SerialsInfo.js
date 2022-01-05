import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {Container, Row} from "react-bootstrap";
import notFound from '../../image/not found.jpg'

const SerialsInfo = () => {
    const {id} = useParams()
    const [serial, setSerial] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/tv/${id}?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setSerial(data)
            })
    }, [] )

    const input = serial.first_air_date?.split('-')
    const output = input?.slice(0, 1)

    return (
        <div key={serial.id} className='about-film'>
            <div className='info' style={{
                background: `rgba(0,0,0,0.7) url(https://image.tmdb.org/t/p/original/${serial.backdrop_path}) center/cover`,
                backgroundBlendMode: 'darken'
            }}>
                <Container>
                    <Row>
                        <div className='col-4'>
                            <div className='py-2'>
                                <img className='w-100' src={serial.poster_path ? `${PHOTO_BASE}${serial.poster_path}` : notFound} alt="serials photo"/>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='film-title w-75'>{serial.name}
                                <span className='film-date'>({output})</span>
                            </div>
                            <div className='film-sub-title'>
                                <span className='film-pod-title'>Время : </span>
                                {serial.episode_run_time}мин
                            </div>
                            <div className='film-sub-title'>
                                <span className='film-pod-title'>Жанры : </span>
                                {serial.genres?.map(it => {
                                    return (
                                        <span className='film-sub-title'>
                                            {it.name},
                                        </span>
                                    )
                                })}
                            </div>
                            <div className='info-block'>
                                <h3 className='h3'>Overview</h3>
                                <div>
                                    {serial.overview ? serial.overview : 'Sorry but we don\'t have information about this movie yet'}
                                </div>
                            </div>
                            <div>
                                {
                                    serial.created_by?.map(it => {
                                        return (
                                            <div>
                                                <div>Created by</div>
                                                <div>{it.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SerialsInfo;