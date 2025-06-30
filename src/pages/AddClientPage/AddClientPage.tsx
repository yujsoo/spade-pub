import { useState } from 'react';
import styles from './AddClientPage.module.css';
import { clientData } from '@/data/clientData';
import { companyData } from '@/data/companyData';
import PageTitle from '@/components/atoms/PageTitle';
import HeadContent from '@/components/molecules/HeadContent';
import ClientListSection from '@/components/organisms/ClientListSection';
import CompanyDetailSection from '@/components/organisms/CompanyDetailSection';
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
          <ClientListSection
            clientData={clientData}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
        <div className={`${styles.containerCon} ${styles.detailListCon}`}>
          <CompanyDetailSection selectedCompany={selectedCompany} />
        </div>
      </div>
    </>
  );
}

export default AddClientPage;
