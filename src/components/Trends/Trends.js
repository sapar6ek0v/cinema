import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import advertise from '../../image/advertisement-examples.webp'
import {PHOTO_BASE} from "../../constants/api";
import {Link} from "react-router-dom";

const Trends = () => {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=4eb03517df3f1b8227a751b8d89d9ee8`)
            .then(({data}) => {
                setTrends(data.results)
            })
    }, [])

    return (
        <div className='trends-page'>
            <Container>
                <Row>
                    <div className='col-8 md-col-8'>
                        <div className='trends-img-box'>
                            <div className='content-adrt'>-advertisement-</div>
                            <img className='trends-img' src={advertise} alt="advertise"/>
                        </div>
                        <div>
                            <div className='content-title mb-4'>
                                LATEST MOVIES
                            </div>
                            <div>
                                {
                                    trends?.slice(0,1).map( (it) => {
                                        return (
                                            <Link to={`movie-info/${it.id}`} key={it.id} className='d-flex text-decoration-none'>
                                                <img className='trends-card-img' src={`${PHOTO_BASE}${it?.poster_path}`} alt={it.title}/>
                                                <div>
                                                    <div className='trends-card-title'>{it.title}</div>
                                                    <div className='trends-card-time'>{it.release_date}</div>
                                                    <div className='trends-card-overview'>Overview: <span className='trends-card-time'>{it.overview}</span></div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            <div>
                               <Row >
                                   {
                                       trends?.slice(1,5).map( (it) => {
                                           return (
                                               <Link to={`/movie-info/${it.id}`} key={it.id} className='col-6 text-decoration-none md-col-6'>
                                                   <div>
                                                       <div className='trends-card-title mb-1'>{it.title}</div>
                                                       <div className='trends-card-time mb-1'>{it.release_date}</div>
                                                       <div className='trends-card-overview'>Overview: <span className='trends-card-time'>{it.overview}</span></div>
                                                   </div>
                                               </Link>
                                           )
                                       })
                                   }
                               </Row>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 md-col-4'>
                        <div>

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Trends;