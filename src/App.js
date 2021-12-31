import {Routes, Route, Navigate} from "react-router-dom";
import Main from "./pages/Main/Main";
import FilmsInfo from "./pages/Films-info/FilmsInfo";
import Header from "./components/Header/Header";
import TopSearchInfo from "./pages/Seacrh-films/TopSearchInfo";
import React from "react";
import AllFilms from "./pages/All-films/AllFilms";
import PopularFilms from "./pages/Popular-films/PopularFilms";
import CreditsInfo from "./pages/Credits/CreditsInfo";
import Footer from "./components/Footer/Footer";
import UpcomingFilms from "./pages/UpcomingFilms/UpcomingFilms";
import TopRated from "./pages/Top-rated/TopRated";


function App() {

    return (
        <div className='d-flex flex-column justify-content-between'>
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='*' element={<Navigate to='/'/>}/>
                    <Route path='/all-films' element={<AllFilms />}/>
                    <Route path='/popular' element={<PopularFilms />} />
                    <Route path='/top-rated' element={<TopRated/>} />
                    <Route path='/upcoming' element={<UpcomingFilms />} />
                    <Route path='/movie-info/:id' element={<FilmsInfo />} />
                    <Route path='/search-films/:name' element={<TopSearchInfo />} />
                    <Route path='/credits-info/:id' element={<CreditsInfo />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
