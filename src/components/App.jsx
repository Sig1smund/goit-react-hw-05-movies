import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Heading from './Heading/heading';
import Container from './Container/container';
import Spinner from './Spinner/spinner';
import HomePage from './Home/home';

// const HomePage = lazy(()=> import('./Home/home' ));
const MoviesPage = lazy(() => import('./Movies/movies'))
const MovieDetailsPage = lazy(() => import('./MovieDetails/movieDetails' ))
const Cast = lazy(() => import('./Cast/cast' ))
const Reviews = lazy(() => import('./Reviews/reviews'))
const NotFound = lazy(() => import('./NotFound/notFound'))

export default function App () {
  return (
    <Container>
      <Suspense fallback={<Spinner timeout={3000}/>}>
      <Heading/>
      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/> 
        <Route path="/movies/:moviesId" element={<MovieDetailsPage/>}>         
                <Route path='cast' element={<Cast/>} />
                <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </Container>);
};
