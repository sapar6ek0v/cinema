import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Paths } from './router/routes';
import LanguageProvider from './context/LanguageContext';
import Main from './pages/Main/Main';
import FilmsInfo from './pages/FilmsInfo/FilmsInfo';
import TopSearchInfo from './pages/FilmsInfo/TopSearchInfo';
import AllFilms from './pages/AllFilms/AllFilms';
import PopularFilms from './pages/PopularFilms/PopularFilms';
import CreditsInfo from './pages/CreditsInfo/CreditsInfo';
import UpcomingFilms from './pages/UpcomingFilms/UpcomingFilms';
import TopRated from './pages/TopRated/TopRated';
import PopularSerials from './pages/Serials/PopularSerials';
import OnTheAirSerials from './pages/Serials/OnTheAirSerials';
import TopRatedSerials from './pages/Serials/TopRatedSerials';
import SerialsInfo from './pages/SerialsInfo/SerialsInfo';
import NowPlayingFilms from './pages/NowPlayingFilms/NowPlayingFilms';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path={Paths.MAIN} element={<Main />} />
              <Route path={Paths.All_FILMS} element={<AllFilms />} />
              <Route path={Paths.POPULAR} element={<PopularFilms />} />
              <Route path={Paths.TOP} element={<TopRated />} />
              <Route path={Paths.NOW_PLAYING} element={<NowPlayingFilms />} />
              <Route path={Paths.UPCOMING} element={<UpcomingFilms />} />
              <Route path={Paths.MOVIE_DETAILS} element={<FilmsInfo />} />
              <Route path={Paths.SEARCH} element={<TopSearchInfo />} />
              <Route path={Paths.CREDITS_DETAILS} element={<CreditsInfo />} />
              <Route path={Paths.TV_SERIALS_POPULAR} element={<PopularSerials />} />
              <Route path={Paths.TV_SERIALS_ON_THE_AIR} element={<OnTheAirSerials />} />
              <Route path={Paths.TV_SERIALS_TOP_RATED} element={<TopRatedSerials />} />
              <Route path={Paths.TV_SERIALS_DETAILS} element={<SerialsInfo />} />
              <Route path={Paths.ANONYM} element={<Navigate to="/" />} />
            </Routes>
          </Layout>
          {/* <Footer /> */}
        </LanguageProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
