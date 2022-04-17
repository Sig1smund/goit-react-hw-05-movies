import { useState } from 'react';
import Button from 'components/Button/button';

export default function SearchMovie({forSearch, search}) {
        const [input, setInput] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(!input){
                return;
            }
            forSearch(input);
          }}>
            <input type="text"
                placeholder={search ?? 'Search for a movie...'}
                onChange={e => setInput(e.target.value)}
            />
            <Button type="submit">
                Search
            </Button>
        </form>
    )
}