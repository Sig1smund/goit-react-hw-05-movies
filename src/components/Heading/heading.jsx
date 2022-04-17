import Navigation from 'components/Navigation/navigation';
import s from './heading.module.css';

export default function Heading() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
