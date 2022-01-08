import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import notFound from "../../../image/not found.jpg";

const Trailer = ({videos, turnOn,filmImg}) => {
    return (
        <div className='d-flex overflow-auto'>
            {
                videos.map(video => {
                    return (
                        <div className='col-6'>
                            <div className='p-3'>
                                <button onClick={() => turnOn(video.key)} type='button'
                                        className='position-relative h-100 trailer-btn'>
                                    <FontAwesomeIcon className='trailer-icon' icon={faPlayCircle}/>
                                    {
                                        filmImg.slice(5, 6).map(it => {
                                            return <img src={"https://image.tmdb.org/t/p/w500" + it.file_path}
                                                        alt="" className='trailer-img'/>
                                        })
                                    }
                                    <div className='d-inline-block link py-3'>{video.name}</div>
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
        </div>
    );
};

export default Trailer;