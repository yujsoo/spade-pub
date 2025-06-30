import styles from './CompanyDetailSection.module.css';
import Button from '@/components/atoms/Button';
import CompanyDetail from '@/components/organisms/CompanyDetail';
import ScrollContainer from '@/components/templates/ScrollContainer';
import type { CompanyType } from '@/types/companyType';

interface props {
  selectedCompany: CompanyType | null;
}

function CompanyDetailSection({ selectedCompany }: props) {
  return (
    <>
      <div className={styles.btnCon}>
        <Button text="수정" variant="white" />
      </div>
      <ScrollContainer>
        <CompanyDetail
          caption="거래처 등록 상세 표"
          selectedClient={selectedCompany}
        />
      </ScrollContainer>
    </>
  );
}

export default CompanyDetailSection;
