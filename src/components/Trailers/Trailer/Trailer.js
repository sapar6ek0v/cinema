import React from 'react';
import {Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import notFound from "../../../image/not found.jpg";

const Trailer = ({videos, turnOn,filmImg}) => {
    return (
        <Row>
            {
                videos.map(video => {
                    return (
                        <div className='col-6'>
                            <div className='p-3'>
                                <button onClick={() => turnOn(video.key)} type='button'
                                        className='position-relative h-100 trailer-btn'>
                                           <span className='trailer-icon'>
                                               <FontAwesomeIcon icon={faPlay}/>
                                           </span>
                                    {
                                        filmImg.slice(5, 6).map(it => {
                                            return <img src={"https://image.tmdb.org/t/p/w500" + it.file_path}
                                                        alt="" className='trailer-img'/>
                                        })
                                    }
                                    <div className='d-inline-block link'>{video.name}</div>
                                    <div className='trailer-size-title d-inline-block'>{video.size}<span className='trailer-size'>HD</span></div>

                                </button>
                            </div>
                        </div>
                    )
                }) || <div>
                    <h3 className='text-white'>Sorry but we don't have trailers or videos about this movie
                        yet</h3>
                    <img src={notFound} alt="trailer"/>
                </div>
            }
        </Row>
    );
};

export default Trailer;