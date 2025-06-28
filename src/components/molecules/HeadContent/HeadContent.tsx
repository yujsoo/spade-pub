import styles from './HeadContent.module.css';
import UserUtil from '@/components/atoms/UserUtil';

interface HeadContentProps {
  children: React.ReactNode;
}

function HeadContent({ children }: HeadContentProps) {
  return (
    <div className={styles.headContent}>
      <div>{children}</div>
      <UserUtil />
    </div>
  );
}

export default HeadContent;
