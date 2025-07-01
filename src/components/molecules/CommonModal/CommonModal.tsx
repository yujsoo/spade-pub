import Button from '@/components/atoms/Button';
import styles from './CommonModal.module.css';
import ModalWrapper from '@/components/atoms/ModalWrapper';

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  hideBtn?: boolean;
}

function CommonModal({
  isOpen,
  onClose,
  title,
  children,
  hideBtn = false,
}: CommonModalProps) {
  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onClose}>
      <div className={`${styles.modalWrap} ${!hideBtn ? styles.withBtn : ''}`}>
        <div className={styles.modalTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.modalContent}>{children}</div>
        <button onClick={onClose} className={styles.modalClose}>
          닫기
        </button>
      </div>
      {!hideBtn && (
        <div className={styles.modalCtrlBtn}>
          <Button text="취소" variant="white" onClick={onClose} />
          <Button text="저장" />
        </div>
      )}
    </ModalWrapper>
  );
}

export default CommonModal;
