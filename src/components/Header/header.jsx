import Navigation from 'components/Navigation/navigation';
import s from './header.module.css';

export default function Header() {
  return (
    <Header className={s.header}>
      <Navigation />
    </Header>
  );
}
