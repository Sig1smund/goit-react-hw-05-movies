import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from 'fetch/fetch';

export default function ListMovies({search}) {
    const [movies, setMovies] = useState()
    const location = useLocation()
    useEffect(() => {
        if(!search){
            return;
        }

        API.fetchSearchMovie(search)
            .then(data => setMovies(data.results))
    }, [search])

    return (
        <>
        {movies && (
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                         <Link to={`${movie.id}`} state={{ from: location, label: 'Go to Search' }}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        )}
        </>
    )
}