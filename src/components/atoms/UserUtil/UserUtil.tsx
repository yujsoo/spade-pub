import { Link } from 'react-router-dom';
import styles from './UserUtil.module.css';
import mypageIcon from '@/assets/ic/ic_mypage.svg';
import logoutIcon from '@/assets/ic/ic_logout.svg';

function UserUtil() {
  return (
    <div className={styles.userUtil}>
      <Link to="/">
        <img src={mypageIcon} />
        마이페이지
      </Link>
      <Link to="/">
        <img src={logoutIcon} />
        로그아웃
      </Link>
    </div>
  );
}

export default UserUtil;
