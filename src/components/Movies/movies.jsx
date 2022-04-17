import { useSearchParams } from 'react-router-dom';
import SearchMovie from 'components/SearchMovie/searchMovie';
import ListMovies from 'components/ListMovies/listMovies';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search'); 

    return (
        <div>
        <SearchMovie forSearch={search => setSearchParams({ search })}
        search={search}/>
        <ListMovies search={search}/>
        </div>

    )
}