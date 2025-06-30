import styles from './RadioGroup.module.css';
import RadioBtn from '@/components/atoms/RadioBtn';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

function RadioGroup({
  name,
  value,
  options,
  onChange,
  disabled = false,
}: RadioGroupProps) {
  return (
    <div className={`${styles.radioGroup}`}>
      {options.map((opt) => (
        <RadioBtn
          key={opt.value}
          name={name}
          value={opt.value}
          label={opt.label}
          checked={value === opt.value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
