import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MenuItem.module.css';
import type { SiteMenu } from '@/types/siteMenu';

interface MenuProps {
  menu: SiteMenu[];
  isOpen: boolean;
  openItemId: number | null;
  setOpenItemId: (id: number | null) => void;
}

function MenuItem({ menu, isOpen, openItemId, setOpenItemId }: MenuProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(id === openItemId ? null : id);
  };

  return (
    <>
      {menu.map((item) => {
        const isItemOpen = openItemId === item.id;

        return (
          <li
            key={item.id}
            className={`${styles.menuItem} ${item.level === 1 ? styles.level1 : styles.level2}`}
            onMouseEnter={() => !isOpen && setHoveredId(item.id)}
            onMouseLeave={() => !isOpen && setHoveredId(null)}>
            <p
              className={styles.menuItemBtn}
              onClick={() => item.children && toggleItem(item.id)}>
              {item.icon && (
                <span className={styles.menuIcon} data-icon={item.icon} />
              )}
              {isOpen &&
                (item.path ? (
                  <Link
                    to={item.path}
                    className={styles.linkText}
                    onClick={(e) => e.stopPropagation()}>
                    {item.title}
                  </Link>
                ) : (
                  <span className={styles.text}>{item.title}</span>
                ))}
              {item.children && (
                <span
                  className={`${styles.arrowIcon} ${
                    isItemOpen ? styles.arrowActive : ''
                  } ${isOpen ? styles.arrowVisible : ''}`}>
                  <i></i>
                  <i></i>
                </span>
              )}
            </p>

            {/* click menu */}
            <AnimatePresence initial={false}>
              {item.children && isItemOpen && (
                <motion.ul
                  className={styles.submenu}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}>
                  <MenuItem
                    menu={item.children}
                    isOpen={isOpen}
                    openItemId={openItemId}
                    setOpenItemId={setOpenItemId}
                  />
                </motion.ul>
              )}
            </AnimatePresence>

            {/* hover menu */}
            {item.children && !isOpen && hoveredId === item.id && (
              <div className={styles.hoverPopMenu}>
                <div className={styles.arrow}></div>
                <div className={styles.popContent}>
                  <p className={styles.popTitle}>{item.title}</p>
                  <ul className={styles.popMenuList}>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link to={child.path || '#'}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </>
  );
}

export default MenuItem;
