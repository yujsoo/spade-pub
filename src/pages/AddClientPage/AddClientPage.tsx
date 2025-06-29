import { useState } from 'react';
import styles from './AddClientPage.module.css';
import { clientData } from '@/data/clientData';
import { companyData } from '@/data/companyData';
import PageTitle from '@/components/atoms/PageTitle';
import Button from '@/components/atoms/Button';
import HeadContent from '@/components/molecules/HeadContent';
import ClientList from '@/components/organisms/ClientList';
import CompanyDetail from '@/components/organisms/CompanyDetail';
import ScrollContainer from '@/components/templates/ScrollContainer';
import useSelectedCompany from '@/hooks/useSelectedCompany';
import laptopIcon from '@/assets/ic/ic_laptop.svg';

function AddClientPage() {
  // 사용자가 선택한 항목 id 저장
  const [selectedId, setSelectedId] = useState<string | null>(
    clientData[0]?.id ?? null,
  );

  const selectedCompany = useSelectedCompany(
    selectedId,
    clientData,
    companyData,
  );

  return (
    <>
      <HeadContent>
        <PageTitle text="거래처 등록" iconSrc={laptopIcon} />
      </HeadContent>
      <div className={styles.container}>
        <div className={`${styles.containerCon} ${styles.clientListCon}`}>
          <div className={styles.btnCon}>
            <Button text="등록" />
          </div>
          <ScrollContainer>
            <ClientList
              clientData={clientData}
              onSelect={(id) => setSelectedId(id)}
              selectedId={selectedId}
              caption="거래처 등록 현황 표"
            />
          </ScrollContainer>
        </div>
        <div className={`${styles.containerCon} ${styles.detailListCon}`}>
          <div className={styles.btnCon}>
            <Button text="수정" variant="white" />
          </div>
          <ScrollContainer>
            <CompanyDetail
              caption="거래처 등록 상세 표"
              selectedClient={selectedCompany}
            />
          </ScrollContainer>
        </div>
      </div>
    </>
  );
}

export default AddClientPage;
