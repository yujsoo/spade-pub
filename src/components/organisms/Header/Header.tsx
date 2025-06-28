import styles from './Header.module.css';
import NavMenu from '@/components/molecules/NavMenu';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className="srOnly">사이트 이름</h1>
      <NavMenu />
    </header>
  );
}

export default Header;
