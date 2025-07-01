import CommonModal from '@/components/molecules/CommonModal';
import CompanyDetail from '../CompanyDetail';
import ScrollContainer from '@/components/templates/ScrollContainer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function RegisterClientModal({ isOpen, onClose }: Props) {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose} title="거래처 신규등록">
      <ScrollContainer>
        <CompanyDetail
          caption="거래처 등록"
          selectedClient={null}
          isEditMode={true}
        />
      </ScrollContainer>
    </CommonModal>
  );
}

export default RegisterClientModal;
