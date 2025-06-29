import styles from './CheckBox.module.css';

interface CheckBoxProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string; // 접근성 관련
}

function CheckBox({ checked, onChange, label = '항목 선택' }: CheckBoxProps) {
  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        className="srOnly"
        checked={checked}
        onChange={onChange}
        aria-label={`${label} 선택`}
      />
      <i></i>
    </label>
  );
}

export default CheckBox;
