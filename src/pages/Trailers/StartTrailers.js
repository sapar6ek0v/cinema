import React from 'react';
import start from "../../image/start-video.svg";
import {Container} from "react-bootstrap";

const StartTrailers = ({film, turnOn, videos}) => {
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
                                    <img src={"https://image.tmdb.org/t/p/w500" + film.poster_path} alt="" className='trailer-img'/>
                                </button>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
};

export default StartTrailers;