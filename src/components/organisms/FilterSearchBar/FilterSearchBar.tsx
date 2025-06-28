import { useState } from 'react';
import BaseSelect from '@/components/atoms/BaseSelect';
import SearchBar from '@/components/molecules/SearchBar';
import styles from './FilterSearchBar.module.css';

function FilterSearchBar() {
  const [selected, setSelected] = useState('all');

  return (
    <div className={styles.wrapper}>
      <BaseSelect
        value={selected}
        onChange={setSelected}
        className={styles.select}
      />
      <SearchBar />
    </div>
  );
}

export default FilterSearchBar;
