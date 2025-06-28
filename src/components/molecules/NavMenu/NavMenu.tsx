import { useState } from 'react';
import { siteMenuTree } from '@/data/siteMenu';
import styles from './NavMenu.module.css';
import MenuToggleButton from '@/components/atoms/MenuToggleButton';
import MenuItem from '@/components/atoms/MenuItem/MenuItem';

function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${open ? styles.open : styles.closed}`}>
      <MenuToggleButton
        isOpen={open}
        onClick={() => setOpen((prev) => !prev)}
      />
      <ul>
        <MenuItem menu={siteMenuTree} isOpen={open} />
      </ul>
    </nav>
  );
}

export default NavMenu;
