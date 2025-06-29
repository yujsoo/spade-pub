import HeadContent from '@/components/molecules/HeadContent';
import PageTitle from '@/components/atoms/PageTitle';
import laptopIcon from '@/assets/ic/ic_laptop.svg';
import ClientList from '@/components/organisms/ClientList';
import { clientData } from '@/data/clientData';

function AddClientPage() {
  return (
    <>
      <HeadContent>
        <PageTitle text="거래처 등록" iconSrc={laptopIcon} />
      </HeadContent>
      <ClientList clientData={clientData} caption="거래처 등록 현황 표" />
    </>
  );
}

export default AddClientPage;
