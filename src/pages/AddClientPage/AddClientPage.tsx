import styles from './AddClientPage.module.css';
import HeadContent from '@/components/molecules/HeadContent';
import PageTitle from '@/components/atoms/PageTitle';
import ClientList from '@/components/organisms/ClientList';
import ScrollContainer from '@/components/templates/ScrollContainer';
import { clientData } from '@/data/clientData';
import laptopIcon from '@/assets/ic/ic_laptop.svg';
import Button from '@/components/atoms/Button';
import CompanyDetail from '@/components/organisms/CompanyDetail';

function AddClientPage() {
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
            <ClientList clientData={clientData} caption="거래처 등록 현황 표" />
          </ScrollContainer>
        </div>
        <div className={`${styles.containerCon} ${styles.detailListCon}`}>
          <div className={styles.btnCon}>
            <Button text="수정" variant="white" />
          </div>
          <ScrollContainer>
            <CompanyDetail caption="거래처 등록 상세 표" />
          </ScrollContainer>
        </div>
      </div>
    </>
  );
}

export default AddClientPage;
