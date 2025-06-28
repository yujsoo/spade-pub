import styles from './PageTitle.module.css';

interface PageTitleProps {
  text: string;
  iconSrc?: string;
}

function PageTitle({ text, iconSrc }: PageTitleProps) {
  return (
    <h3 className={styles.pageTitle}>
      {iconSrc && <img src={iconSrc} alt="" />}
      {text}
    </h3>
  );
}

export default PageTitle;
