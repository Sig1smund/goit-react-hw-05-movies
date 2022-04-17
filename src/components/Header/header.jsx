import Navigation from '../Navigation';
import s from './header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
