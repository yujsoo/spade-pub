import { useState } from 'react';
import styles from './NavMenu.module.css';
import MenuToggleButton from '@/components/atoms/MenuToggleButton';
import MenuItem from '@/components/atoms/MenuItem/MenuItem';
import { siteMenuTree } from '@/data/siteMenu';

function NavMenu() {
  const [open, setOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  // 변경: 메뉴 닫을 때 서브메뉴 모두 닫힘
  const handleToggleMenu = () => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) {
        setOpenItemId(null);
      }
      return next;
    });
  };

  return (
    <nav className={`${styles.nav} ${open ? styles.open : styles.closed}`}>
      <MenuToggleButton isOpen={open} onClick={handleToggleMenu} />
      <ul>
        <MenuItem
          menu={siteMenuTree}
          isOpen={open}
          openItemId={openItemId}
          setOpenItemId={setOpenItemId}
        />
      </ul>
    </nav>
  );
}

export default NavMenu;
