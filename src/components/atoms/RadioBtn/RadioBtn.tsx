import styles from './RadioBtn.module.css';

interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}: RadioProps) {
  return (
    <label className={styles.radio}>
      <input
        type="radio"
        className="srOnly"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <i />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
}

export default Radio;
