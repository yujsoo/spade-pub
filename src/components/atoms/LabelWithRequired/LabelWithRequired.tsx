import styles from './LabelWithRequired.module.css';

interface LabelWithRequiredProps {
  label: string;
  required?: boolean;
}

function LabelWithRequired({ label, required }: LabelWithRequiredProps) {
  return (
    <>
      {label}
      {required && <span className={styles.required}>*</span>}
    </>
  );
}

export default LabelWithRequired;
