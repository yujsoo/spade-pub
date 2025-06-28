import { Outlet } from 'react-router-dom';
import styles from './DefaultLayout.module.css';
import Header from '@/components/organisms/Header';

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
