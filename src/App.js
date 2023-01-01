import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

import LanguageProvider from './context/LanguageContext';
import TopSearchInfo from './pages/MovieDetails/TopSearchInfo';
import { Paths } from './constants/paths';
import Layout from './components/Layout';
import Main from './pages/Main';
import MovieDetails from './pages/MovieDetails';
import SerialDetails from './pages/SerialDetails';
import Movies from './pages/Movies';
import Serials from './pages/Serials';
import ActorInformation from './pages/ActorInformation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <Layout>
              <Routes>
                <Route path={Paths.MAIN} element={<Main />} />
                <Route path={Paths.MOVIE_DETAILS} element={<MovieDetails />} />
                <Route path={Paths.TV_SERIALS_DETAILS} element={<SerialDetails />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/serials" element={<Serials />} />
                <Route path={Paths.SEARCH} element={<TopSearchInfo />} />
                <Route path={Paths.CREDITS_DETAILS} element={<ActorInformation />} />
                {/* <Route path={Paths.ANONYM} element={<Navigate to="/" />} /> */}
              </Routes>
            </Layout>
          </LanguageProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
