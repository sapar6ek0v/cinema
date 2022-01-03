import React, {useState} from 'react';
import {Container, Row} from "react-bootstrap";
import SimpleSlider from "../Slick-slider/SimpleSlider";
import TopSearch from "../Seacrh-films/TopSearch";
import SlickPopularFilms from "../Popular-films/SlickPopularFilms";
import SlickUpcoming from "../UpcomingFilms/SlickUpcoming";
import SlickTopRated from "../Top-rated/SlickTopRated";
import advertise from '../../image/advertise.jpg'
import Tizers from "../Tizers/Tizers";
import PersonPopular from "../PersonPopular/PersonPopular";
import TvPopular from "../Tv/TVPopular";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import TvTopRated from "../Tv/TVTopRated";
import TvOnTheAir from "../Tv/TVOnTheAir";
import Trends from "../Trends/Trends";


const Main = () => {
    const activeBtn = document.querySelector('.active')

    const [active, setActive] = useState(activeBtn)


    const toggleContent = (event) => {
        setActive(event)
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
                return <TvPopular />
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
                                {
                                    switchTVContent(active)
                                }
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