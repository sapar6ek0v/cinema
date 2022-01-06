import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import './serilas-after-info.css'
import axios from "axios";
import {API_KEY, PHOTO_BASE, URL_BASE} from "../../../constants/api";
import {useParams} from "react-router-dom";
import anonym from '../../../image/profile.jpg'

const SerialsAfterInfo = () => {
    const {id} = useParams()
    const [casts, setCasts] = useState([])

    useEffect(() => {
        axios(`${URL_BASE}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
            .then(({data}) => {
                setCasts(data.cast)
            })
    }, [id])

    return (
        <div className='serials-pod-page'>
            <Container>
                <Row>
                    <div className='col-8'>
                        <h3>Media</h3>
                    </div>
                    <div className='col-4'>
                        {
                            casts.map( actors => {
                              return (
                                  <div>
                                      <img className='w-100' src={actors.profile_path ? `${PHOTO_BASE}${actors.profile_path}` : anonym} alt=""/>
                                  </div>
                              )
                            })
                        }
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default SerialsAfterInfo;