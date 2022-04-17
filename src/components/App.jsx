import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Container from './Container/container';
import Spinner from './Spinner/spinner';

const Home = lazy(()=> import('./Home/home' ));
const Movies = lazy(() => import('./Movies/movies'))
const MovieDetails = lazy(() => import('./MovieDetails/movieDetails' ))
const Cast = lazy(() => import('./Cast/cast' ))
const Reviews = lazy(() => import('./Reviews/reviews'))
const NotFound = lazy(() => import('./NotFound/notFound'))

export default function App () {
  return (<Container>
      <Header/>
      <Suspense fallback={<Spinner timeout={2000}/>}>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/> 
        <Route path="/movies/:moviesId" element={<MovieDetails/>}>         
                <Route path='cast' element={<Cast/>} />
                <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense>

    </Container>);
};
