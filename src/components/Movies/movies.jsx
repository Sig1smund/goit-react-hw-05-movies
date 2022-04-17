import { useSearchParams } from 'react-router-dom';
import MoviesForm from 'components/MoviesForm/MoviesForm';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search'); 

    return (
        <div>
        <MoviesForm forSearch={search => setSearchParams({ search })}
        search={search}/>
        <MoviesList search={search}/>
        </div>

    )
}