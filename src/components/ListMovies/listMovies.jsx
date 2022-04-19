import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from 'fetch/fetch';
import Spinner from 'components/Spinner/spinner';

export default function ListMovies({search}) {
    const [movies, setMovies] = useState()
    const [spinner, setSpinner] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if(!search){
            return;
        }
        setSpinner(true);
        API.fetchSearchMovie(search)
            .then(data => {
                console.log(data)
                if (data.results.length === 0) {
                    window.alert('Русский корабль, иди на#уй')
                }
                setMovies(data.results)
            }).finally(() => { setSpinner(false) })
    }, [search])

    return (
        <>
        {spinner && <Spinner/>}
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