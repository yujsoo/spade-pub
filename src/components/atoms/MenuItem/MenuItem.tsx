import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';
import type { SiteMenu } from '@/types/siteMenu';

interface MenuProps {
  menu: SiteMenu[];
  isOpen: boolean;
}

function MenuItem({ menu, isOpen }: MenuProps) {
  return (
    <>
      {menu.map((item) => (
        <li
          key={item.id}
          className={`${styles.menuItem} ${item.level === 1 ? styles.level1 : styles.level2}`}>
          <p className={styles.menuItemBtn}>
            {item.icon && (
              <span className={styles.menuIcon} data-icon={item.icon} />
            )}
            {isOpen &&
              (item.path ? (
                <Link to={item.path} className={styles.linkText}>
                  {item.title}
                </Link>
              ) : (
                <span className={styles.text}>{item.title}</span>
              ))}
          </p>
          {item.children && (
            <ul className={styles.submenu}>
              <MenuItem menu={item.children} isOpen={isOpen} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
}

export default MenuItem;
