import styles from './AddClientPage.module.css';
import HeadContent from '@/components/molecules/HeadContent';
import PageTitle from '@/components/atoms/PageTitle';
import ClientList from '@/components/organisms/ClientList';
import ScrollContainer from '@/components/templates/ScrollContainer';
import { clientData } from '@/data/clientData';
import laptopIcon from '@/assets/ic/ic_laptop.svg';

function AddClientPage() {
  return (
    <>
      <HeadContent>
        <PageTitle text="거래처 등록" iconSrc={laptopIcon} />
      </HeadContent>
      <div className={styles.container}>
        <ScrollContainer className={styles.clientListCon}>
          <ClientList clientData={clientData} caption="거래처 등록 현황 표" />
        </ScrollContainer>
      </div>
    </>
  );
}

export default AddClientPage;
