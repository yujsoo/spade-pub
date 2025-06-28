import { useState } from 'react';
import styles from './BaseSelect.module.css';

interface Option {
  label: string;
  value: string;
}

interface BaseSelectProps {
  options?: Option[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const defaultOptions: Option[] = [
  { label: '전체', value: 'all' },
  { label: '옵션명1', value: 'option-1' },
  { label: '옵션명2', value: 'option-2' },
];

function BaseSelect({
  options = defaultOptions,
  value,
  onChange,
  className,
}: BaseSelectProps) {
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}>
        {selected?.label ?? '선택 가능한 목록이 없습니다'}
        <span className={`${styles.arrow} ${open ? styles.open : ''}`} />
      </button>

      {open && (
        <ul className={styles.dropdown}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.item}
              onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BaseSelect;
