import { useState } from 'react';
import styles from './NavMenu.module.css';
import MenuToggleButton from '@/components/atoms/MenuToggleButton';

function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${open ? styles.open : styles.closed}`}>
      <MenuToggleButton
        isOpen={open}
        onClick={() => setOpen((prev) => !prev)}
      />
    </nav>
  );
}

export default NavMenu;
