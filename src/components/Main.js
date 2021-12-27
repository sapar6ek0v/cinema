import React from 'react';
import TheRandomNowPlayingFilms from "./films_now_playing/TheRandomNowPlayingFilms";
import Header from "./Header";
import {Container} from "react-bootstrap";
import SimpleSlider from "./slick-slider/SimpleSlider";
import TopSearch from "./seacrh/TopSearch";


const Main = () => {

    return (
        <>
            <div className='hero'>
                <Container>
                    <Header />
                    <TopSearch />
                    <SimpleSlider />
                </Container>
            </div>
            <div className='content'>
                <TheRandomNowPlayingFilms/>
            </div>
        </>
    )

};



export default Main;