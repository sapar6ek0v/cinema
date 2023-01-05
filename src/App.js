import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import LanguageProvider from './context/LanguageContext';
import { Paths } from './constants/paths';
import Layout from './components/Layout';
import Main from './pages/Main';
import MovieDetails from './pages/MovieDetails';
import SerialDetails from './pages/SerialDetails';
import Movies from './pages/Movies';
import Serials from './pages/Serials';
import ActorInformation from './pages/ActorInformation';
import SearchResults from './pages/SearchResults';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path={Paths.MAIN} element={<Main />} />
              <Route path={Paths.MOVIE_DETAILS} element={<MovieDetails />} />
              <Route path={Paths.TV_SERIALS_DETAILS} element={<SerialDetails />} />
              <Route path={Paths.MOVIES} element={<Movies />} />
              <Route path={Paths.TV_SHOWS} element={<Serials />} />
              <Route path={Paths.SEARCH} element={<SearchResults />} />
              <Route path={Paths.CREDITS_DETAILS} element={<ActorInformation />} />
              {/* <Route path={Paths.ANONYM} element={<Navigate to="/" />} /> */}
            </Routes>
          </Layout>
        </LanguageProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
