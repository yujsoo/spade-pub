import styles from './CheckBox.module.css';

interface CheckBoxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string; // 접근성 관련
  disabled?: boolean;
}

function CheckBox({
  checked,
  onChange,
  label = '항목 선택',
  disabled = false,
}: CheckBoxProps) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className="srOnly"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-label={`${label} 선택`}
      />
      <i></i>
    </label>
  );
}

export default CheckBox;
