import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../constants/api";
import {Container, Row} from "react-bootstrap";
import './serials.css'
import notFound from '../../image/not found.jpg'
import SerialsCreditsInfo from "../../components/SerilasPage/SerialsItem/SerialsCreditsInfo";
import Loading from "../../components/Loading/Loading";
import StartSerialTrailers from "../../components/Trailers/StartSerialTrailers";
import Trailers from "../../components/Trailers/Trailers";
import SerialMedia from "../../components/SerilasPage/SerialMedia/SerialMedia";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const SerialsInfo = () => {
    const {id} = useParams()
    const [serial, setSerial] = useState({})
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [trailer, setTrailer] = useState([])
    const [trailerKey, setTrailerKey] = useState('')

    useEffect(() => {
        axios(`${URL_BASE}/tv/${id}?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setSerial(data)
                setLoading(false)
            })

        axios(`${URL_BASE}/tv/${id}/videos?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setTrailer(data.results)
            })
    }, [id] )

    const input = serial.first_air_date?.split('-')
    const output = input?.slice(0, 1)

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [modal])

    const turnOn = (key) => {
        setTrailerKey(key)
        setModal(true)
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div key={serial.id} className='about-film'>
            <div className='info' style={{
                background: `rgba(0,0,0,0.7) url(https://image.tmdb.org/t/p/original/${serial.backdrop_path}) center/cover`,
                backgroundBlendMode: 'darken'
            }}>
                <Container>
                    <Row>
                        <div className='col-4 '>
                            <div className='py-4 serials-bg-box'>
                                <img className='serials-bg' src={serial.poster_path ? `${PHOTO_BASE}${serial.poster_path}` : notFound} alt="serials-bg"/>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='serials-title'>{serial.name}
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
                            <SerialMedia /> <span><a href={serial.homepage}><FontAwesomeIcon icon={faHome}/></a></span>
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
                                                <div className='serials-created'>Created by</div>
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
            <div className='sls-trl-crd-box'>
                <Container>
                    <Row>
                        <div className='col-8'>
                            <StartSerialTrailers turnOn={turnOn} videos={trailer} />
                        </div>
                        <div className='col-4'>
                            <SerialsCreditsInfo />
                        </div>
                    </Row>
                </Container>
            </div>
            {modal && <Trailers setModal={setModal} videoKey={trailerKey} />}
        </div>
    );
};

export default SerialsInfo;