import Modal from 'react-modal';
import styles from './ModalWrapper.module.css';

interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

function ModalWrapper({ isOpen, onRequestClose, children }: ModalWrapperProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}>
      {children}
    </Modal>
  );
}

export default ModalWrapper;
