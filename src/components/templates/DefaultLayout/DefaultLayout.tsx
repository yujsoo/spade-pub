import Header from '@/components/organisms/Header';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
