import HeadContent from '@/components/molecules/HeadContent';
import PageTitle from '@/components/atoms/PageTitle';
import laptopIcon from '@/assets/ic/ic_laptop.svg';
import BaseSelect from '@/components/atoms/BaseSelect';

function AddClientPage() {
  return (
    <>
      <HeadContent>
        <PageTitle text="거래처 등록" iconSrc={laptopIcon} />
      </HeadContent>
      <BaseSelect></BaseSelect>
    </>
  );
}

export default AddClientPage;
