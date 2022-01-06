import React, {useEffect, useState} from 'react';
import './serilas-credits-info.css'
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../../constants/api";
import {Link, useParams} from "react-router-dom";
import anonym from '../../../image/profile.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

const SerialsCreditsInfo = () => {
    const {id} = useParams()
    const [actors, setActors] = useState(10)
    const [casts, setCasts] = useState([])


    useEffect(() => {
        axios(`${URL_BASE}/tv/${id}/aggregate_credits?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setCasts(data.cast)
            })
    }, [id])

    return (
        <div className='serials-pod-page'>
            <h3 className='serials-title'>В главных ролях</h3>
            <div className='px-3 py-4'>
                {
                    casts?.slice(0, actors)?.map(actors => {
                        return (
                            <div key={actors.id} className='photo-page'>
                                <Link to={`/credits-info/${actors.id}`} className='text-decoration-none d-flex'>
                                    <div className='photo-box'>
                                        <img className='photo-box-img'
                                             src={actors.profile_path ? `${PHOTO_BASE}${actors.profile_path}` : anonym}
                                             alt={actors.name}/>
                                    </div>
                                    <div className='py-5'>
                                        <div className='fw-bold text-white px-4 '>{actors.name}</div>
                                        <div className='px-4 '>{actors.roles?.map(it => {
                                            return <div>
                                                {it.character}
                                            </div>
                                        })}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
                {
                    actors < casts.length && <div className='d-flex align-items-center'>
                        <button onClick={() => setActors(actors + 10)} className='serials-btn' type='button'>Смотреть
                            ещё... <span className='serials-btn'><FontAwesomeIcon icon={faUserPlus}/></span></button>
                    </div>
                }
            </div>
        </div>
    );
};

export default SerialsCreditsInfo;