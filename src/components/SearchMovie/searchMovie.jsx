import { useState } from 'react';
import Button from 'components/Button/button';
import s from './searchMovie.module.css'

export default function SearchMovie({forSearch, search}) {
        const [input, setInput] = useState('');

    return (
        <form className={s.search__from} onSubmit={e => {
            e.preventDefault();
            if(!input){
                return;
            }
            forSearch(input);
          }}>
            <input type="text" className={s.search__input}
                placeholder={search ?? 'Search for a movie...'}
                onChange={e => setInput(e.target.value.trim())}
            />
            <Button type="submit">
                Search
            </Button>
        </form>
    )
}