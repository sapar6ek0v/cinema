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
import {faExpandArrowsAlt, faHome} from "@fortawesome/free-solid-svg-icons";
import CircularBar from "../../components/CircularBar/CircularBar";
import FactsCard from "../../components/Facts/FactsCard";
import SerialRecommendation from "../../components/SerilasPage/SerialRecommendation";
import ShowImage from "../../components/ShowImage/ShowImage";

const SerialsInfo = () => {
    const {id} = useParams()
    const [serial, setSerial] = useState({})
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [trailer, setTrailer] = useState([])
    const [trailerKey, setTrailerKey] = useState('')
    const [keyWord, setKeyWord] = useState([])
    const [recommendation, setRecommendation] = useState([])
    const [modalImage, setModalImage] = useState(false)



    useEffect(() => {
        const prom1 = axios(`${URL_BASE}/tv/${id}?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setSerial(data)
            })

        const prom2 = axios(`${URL_BASE}/tv/${id}/videos?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setTrailer(data.results)
            })

        const prom3 = axios(`${URL_BASE}/tv/${id}/keywords?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setKeyWord(data.results)
            })

        const prom4 = axios(`${URL_BASE}/tv/${id}/recommendations?api_key=${API_KEY}&language=ru,en`)
            .then(({data}) => {
                setRecommendation(data.results)
            })

        Promise.all([prom1, prom2, prom3, prom4])
            .then(() => setLoading(false))

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

    useEffect(() => {
        if (modalImage) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

    }, [modalImage])

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
                            <div className='py-4 '>
                                <div onClick={() => setModalImage(true)} className='position-relative'>
                                    <img className='serials-bg film-info-img' src={serial.poster_path ? `${PHOTO_BASE}${serial.poster_path}` : notFound} alt="serials-bg"/>
                                    <span className='image-text-grow'>Expand <span><FontAwesomeIcon icon={faExpandArrowsAlt} /></span></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='serials-bg-box'>
                                <div className='serial-title'>{serial.name}
                                    <span className='film-date'>({output})</span>
                                </div>
                                <div className='film-pod-title d-inline-block'>{serial.first_air_date.split('-').join('/')}</div>
                                <span className='film-pod-title px-2 d-inline-block'>&bull;</span>
                                <div className='film-sub-title d-inline-block'>
                                    {serial.genres?.map(it => {
                                        return (
                                            <span className='film-sub-title'>{it.name},</span>
                                        )})}
                                </div>
                                <span className='film-pod-title px-2 d-inline-block'>&bull;</span>
                                <div className='film-pod-title d-inline-block'>{serial.episode_run_time}мин</div>
                                <div className='d-flex align-items-center'>
                                    <CircularBar item={serial} />
                                    <span  className='actor-link-block'><a className='actor-link' href={serial.homepage}><FontAwesomeIcon icon={faHome}/></a></span>
                                    <SerialMedia />
                                </div>
                                <div className='film-tagline'>{serial.tagline || '' }</div>
                                <div className='info-block'>
                                    <h3 className='h3'>Overview</h3>
                                    <div>
                                        {serial.overview ? serial.overview : 'Sorry but we don\'t have information about this movie yet'}
                                    </div>
                                </div>
                                <Row>
                                    {
                                        serial.created_by?.map(it => {
                                            return (
                                                <div className='col-sm-6 col-md-4 col-lg-3'>
                                                    <div className='serials-created'>Created by</div>
                                                    <div>{it.name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='sls-trl-crd-box' style={{
                background: `rgba(0,0,0,0.9) url(https://image.tmdb.org/t/p/original/${serial.backdrop_path || serial.poster_path}) center/cover`,
                backgroundBlendMode: 'darken'
            }}>
                <Container>
                    <Row>
                        <div className='col-8'  style={{
                            background: '#020d18'
                        }}>
                            <SerialsCreditsInfo />
                            <StartSerialTrailers turnOn={turnOn} videos={trailer} />
                            <SerialRecommendation recommendation={recommendation}/>
                        </div>
                        <div className='col-4'  style={{
                            background: '#020d18'
                        }}>
                            <FactsCard film={serial} keyWords={keyWord} />
                        </div>
                    </Row>
                </Container>
            </div>
            {modal && <Trailers setModal={setModal} videoKey={trailerKey} />}
            {modalImage && <ShowImage setModalImage={setModalImage} item={serial}/> }
        </div>
    );
};

export default SerialsInfo;