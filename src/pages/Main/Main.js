import React from 'react';
import NowPlayingFilms from "../Now-playing-films/NowPlayingFilms";
import {Container} from "react-bootstrap";
import SimpleSlider from "../Slick-slider/SimpleSlider";
import TopSearch from "../Seacrh-films/TopSearch";


const Main = () => {

    return (
        <>
            <div className='hero'>
                <Container>
                    <TopSearch />
                    <SimpleSlider />
                </Container>
            </div>
            <div className='content'>
                <NowPlayingFilms/>
            </div>
        </>
    )

};



export default Main;