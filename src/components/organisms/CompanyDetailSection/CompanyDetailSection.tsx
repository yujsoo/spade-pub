import { useState } from 'react';
import styles from './CompanyDetailSection.module.css';
import Button from '@/components/atoms/Button';
import CompanyDetail from '@/components/organisms/CompanyDetail';
import ScrollContainer from '@/components/templates/ScrollContainer';
import type { CompanyType } from '@/types/companyType';

interface props {
  selectedCompany: CompanyType | null;
}

function CompanyDetailSection({ selectedCompany }: props) {
  // 상세 내영 수정 모드
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCancel = () => {
    // 초기 상태로
    setIsEditMode(false);
  };

  const handleSave = () => {
    // 저장 처리
    setIsEditMode(false);
  };

  return (
    <>
      <div className={styles.btnCon}>
        {isEditMode ? (
          <>
            <Button text="취소" variant="white" onClick={handleCancel} />
            <Button text="저장" variant="black" onClick={handleSave} />
          </>
        ) : (
          <Button
            text="수정"
            variant="white"
            onClick={() => setIsEditMode(true)}
          />
        )}
      </div>
      <ScrollContainer>
        <CompanyDetail
          caption="거래처 등록 상세 표"
          selectedClient={selectedCompany}
          isEditMode={isEditMode}
        />
      </ScrollContainer>
    </>
  );
}

export default CompanyDetailSection;
