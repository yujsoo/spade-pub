import DaumPostcodeEmbed from 'react-daum-postcode';
import CommonModal from '@/components/molecules/CommonModal';

interface AddressSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (zipcode: string, address: string) => void;
}

function AddressSearchModal({
  isOpen,
  onClose,
  onComplete,
}: AddressSearchModalProps) {
  const handleComplete = (data: any) => {
    const { zonecode, address } = data;
    onComplete(zonecode, address);
    onClose();
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title="우편번호 검색"
      hideBtn>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </CommonModal>
  );
}

export default AddressSearchModal;
