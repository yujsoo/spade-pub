import { Link } from 'react-router-dom';
import styles from './UserUtil.module.css';

function UserUtil() {
  return (
    <div className={styles.userUtil}>
      <Link to="/" className={styles.mypage}>
        마이페이지
      </Link>
      <Link to="/" className={styles.logout}>
        로그아웃
      </Link>
    </div>
  );
}

export default UserUtil;
