import {Routes, Route, Navigate} from "react-router-dom";
import Main from "./pages/Main/Main";
import FilmsInfo from "./pages/FilmsInfo/FilmsInfo";
import Header from "./components/Header/Header";
import TopSearchInfo from "./pages/FilmsInfo/TopSearchInfo";
import React from "react";
import AllFilms from "./pages/AllFilms/AllFilms";
import PopularFilms from "./pages/PopularFilms/PopularFilms";
import CreditsInfo from "./pages/CreditsInfo/CreditsInfo";
import Footer from "./components/Footer/Footer";
import UpcomingFilms from "./pages/UpcomingFilms/UpcomingFilms";
import TopRated from "./pages/TopRated/TopRated";
import PopularSerials from "./pages/Serials/PopularSerials";
import OnTheAirSerials from "./pages/Serials/OnTheAirSerials";
import TopRatedSerials from "./pages/Serials/TopRatedSerials";
import SerialsInfo from "./pages/SerialsInfo/SerialsInfo";


function App() {

    return (
        <div className='d-flex wrapper'>
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/all-films' element={<AllFilms />}/>
                    <Route path='/popular' element={<PopularFilms />} />
                    <Route path='/top-rated' element={<TopRated/>} />
                    <Route path='/upcoming' element={<UpcomingFilms />} />
                    <Route path='/movie-info/:id' element={<FilmsInfo />} />
                    <Route path='/search-films/:name' element={<TopSearchInfo />} />
                    <Route path='/credits-info/:id' element={<CreditsInfo />} />
                    <Route path='/tv-serials/popular' element={<PopularSerials />}/>
                    <Route path='/tv-serials/on-the-air' element={<OnTheAirSerials />}/>
                    <Route path='/tv-serials/top-rated' element={<TopRatedSerials />}/>
                    <Route path='/tv-serials/serials-info/:id' element={<SerialsInfo />}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
