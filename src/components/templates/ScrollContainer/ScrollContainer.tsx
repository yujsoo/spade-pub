import type { ReactNode } from 'react';
import styles from './ScrollContainer.module.css';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
}

function ScrollContainer({ children, className }: ScrollContainerProps) {
  return (
    <div className={`${styles.scrollContainer} ${className || ''}`}>
      {children}
    </div>
  );
}

export default ScrollContainer;
