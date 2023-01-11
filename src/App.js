import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import LanguageProvider from './context/LanguageContext';
import { Paths } from './constants/paths';
import Layout from './components/Layout';
import Loader from './components/Loader';
import { colors } from './constants/colors';

const Main = lazy(() => import('./pages/Main'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const SerialDetails = lazy(() => import('./pages/SerialDetails'));
const Movies = lazy(() => import('./pages/Movies'));
const Serials = lazy(() => import('./pages/Serials'));
const ActorInformation = lazy(() => import('./pages/ActorInformation'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const SignUp = lazy(() => import('./pages/SignUp'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <Suspense fallback={<Loader bg={colors.darkBlue} />}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path={Paths.MAIN} element={<Main />} />
              <Route path={Paths.MOVIE_DETAILS} element={<MovieDetails />} />
              <Route path={Paths.TV_SERIALS_DETAILS} element={<SerialDetails />} />
              <Route path={Paths.CREDITS_DETAILS} element={<ActorInformation />} />
              <Route path={Paths.MOVIES} element={<Movies />} />
              <Route path={Paths.TV_SHOWS} element={<Serials />} />
              <Route path={Paths.SEARCH} element={<SearchResults />} />
              <Route path={Paths.SIGN_UP} element={<SignUp />} />
              <Route path={Paths.ANONYM} element={<Navigate to={Paths.MAIN} />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
