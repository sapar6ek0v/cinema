import React, {useState} from 'react';
import {Container, Row} from "react-bootstrap";
import SimpleSlider from "../../components/SlickSlider/SimpleSlider";
import TopSearch from "../../components/SeacrhFilms/TopSearch";
import SlickPopularFilms from "../../components/FilmsSlickSlider/SlickPopularFilms";
import SlickUpcoming from "../../components/FilmsSlickSlider/SlickUpcoming";
import SlickTopRated from "../../components/FilmsSlickSlider/SlickTopRated";
import advertise from '../../image/advertise.jpg'
import Tizers from "../../components/Tizers/Tizers";
import PersonPopular from "../../components/PersonPopular/PersonPopular";
import TvPopular from "../Tv/TVPopular";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import TvTopRated from "../Tv/TVTopRated";
import TvOnTheAir from "../Tv/TVOnTheAir";
import Trends from "../../components/Trends/Trends";
import { Transition } from 'react-transition-group';


const Main = () => {
    const activeBtn = document.querySelector('.active')
    const [inProp, setInProp] = useState(false);
    const [active, setActive] = useState(activeBtn)


    const toggleContent = (event) => {
        setActive(event)
        setInProp(true)
    }

    const switchContent = (value) => {
        switch (value) {
            case 'popular':
                return <SlickPopularFilms/>
            case 'coming-soon':
                return <SlickUpcoming/>
            case 'top-rated':
                return <SlickTopRated />
            default:
                return <SlickPopularFilms />
        }
    }

    const switchTVContent = (value) => {
        switch (value) {
            case 'popular':
                return(
                <Transition in={inProp} timeout={500}>
                    <TvPopular />
                </Transition>)
            case 'on-the-air':
                return <TvOnTheAir/>
            case 'top-rated':
                return <TvTopRated/>
            default:
                return <TvPopular />
        }
    }

    return (
        <>
            <div className='hero'>
                <Container>
                    <TopSearch/>
                    <SimpleSlider/>
                </Container>
            </div>
            <div className='content'>
                <Container>
                    <Row>
                        <div className='col-md-8 pad-rt'>
                            <div className='content-sub-box'>
                               <MainPageTitle title={'IN THEATER'} item={'all-films'}/>
                            </div>
                            <div>
                                <button onClick={() => toggleContent('popular')} className='content-btn' type="button"
                                        value='popular'>#POPULAR
                                </button>
                                <button onClick={() => toggleContent('coming-soon')} className='content-btn' type="button"
                                        value='coming-soon'>#COMING SOON
                                </button>
                                <button onClick={() => toggleContent('top-rated')} className='content-btn' type="button"
                                        value='top-rated'>#TOP RATED
                                </button>
                            </div>
                            {
                                switchContent(active)
                            }
                            <div className='content-page'>
                                <div className='content-sub-box'>
                                    <MainPageTitle title={'ON TV'} item={''}/>
                                </div>
                                <div>
                                    <button onClick={() => toggleContent('popular')} className='content-btn' type="button"
                                            value='popular'>#POPULAR
                                    </button>
                                    <button onClick={() => toggleContent('on-the-air')} className='content-btn' type="button"
                                            value='on-the-air'>#on the air
                                    </button>
                                    <button onClick={() => toggleContent('top-rated')} className='content-btn' type="button"
                                            value='top-rated'>#TOP RATED
                                    </button>
                                </div>
                                    <Transition in={inProp} timeout={500}>
                                        {switchTVContent(active)}
                                    </Transition>
                            </div>
                        </div>
                        <div className='col-md-4 pad-lf'>
                            <div className='side-bar'>
                                <div className='content-adrt'>-advertisement-</div>
                                <img className='w-100 mb-4' src={advertise} alt="advertise"/>
                                <PersonPopular />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <Tizers />
            <Trends />
        </>
    )

};


export default Main;