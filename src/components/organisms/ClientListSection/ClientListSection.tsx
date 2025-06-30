import styles from './ClientListSection.module.css';
import Button from '@/components/atoms/Button';
import ClientList from '@/components/organisms/ClientList';
import ScrollContainer from '@/components/templates/ScrollContainer';
import type { ClientType } from '@/types/clientType';

interface Props {
  clientData: ClientType[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function ClientListSection({ clientData, onSelect, selectedId }: Props) {
  return (
    <>
      <div className={styles.btnCon}>
        <Button text="등록" />
      </div>
      <ScrollContainer>
        <ClientList
          clientData={clientData}
          onSelect={onSelect}
          selectedId={selectedId}
          caption="거래처 등록 현황 표"
        />
      </ScrollContainer>
    </>
  );
}

export default ClientListSection;
