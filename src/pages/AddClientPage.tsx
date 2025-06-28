import HeadContent from '@/components/molecules/HeadContent';
import PageTitle from '@/components/atoms/PageTitle';
import laptopIcon from '@/assets/ic/ic_laptop.svg';

function AddClientPage() {
  return (
    <>
      <HeadContent>
        <PageTitle text="거래처 등록" iconSrc={laptopIcon} />
      </HeadContent>
    </>
  );
}

export default AddClientPage;
