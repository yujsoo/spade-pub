import styles from './MenuToggleButton.module.css';

interface MenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function MenuToggleButton({ isOpen, onClick }: MenuToggleButtonProps) {
  return (
    <h2
      className={`${styles.btn} ${isOpen ? styles.open : styles.closed}`}
      aria-label={isOpen ? '전체 메뉴 닫기' : '전체 메뉴 열기'}
      onClick={onClick}>
      {isOpen ? (
        <button>
          <span className={styles.btnText}>전체 메뉴</span>
          <span
            className={`${styles.icon} ${styles.closeIcon}`}
            aria-hidden="true"
          />
        </button>
      ) : (
        <button>
          <span
            className={`${styles.icon} ${styles.openIcon}`}
            aria-hidden="true"></span>
        </button>
      )}
    </h2>
  );
}

export default MenuToggleButton;
