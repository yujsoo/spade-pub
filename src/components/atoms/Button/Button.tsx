import styles from './Button.module.css';
import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'black' | 'white';
  className?: string;
}

function Button({
  text,
  variant = 'black',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}>
      {text}
    </button>
  );
}

export default Button;
