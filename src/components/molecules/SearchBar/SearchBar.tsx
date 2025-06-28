import styles from './SearchBar.module.css';
import Button from '@/components/atoms/Button/Button';

function SearchBar() {
  return (
    <form className={styles.searchWrapper}>
      <input
        type="search"
        placeholder="검색어를 입력해주세요."
        className={styles.searchInput}
      />
      <Button text="검색" variant="black" className={styles.searchBtn} />
    </form>
  );
}

export default SearchBar;
