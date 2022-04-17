import Navigation from 'components/Navigation/navigation';
import s from './header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
