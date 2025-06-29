import LabelWithRequired from '@/components/atoms/LabelWithRequired';
import commonTableStyles from '@/styles/table.module.css';
import styles from './CompanyDetail.module.css';
import type { CompanyType } from '@/types/companyType';

interface CompanyDetailProps {
  caption: string;
  selectedClient: CompanyType | null;
}

function CompanyDetail({ caption, selectedClient }: CompanyDetailProps) {
  return (
    <table
      className={`${commonTableStyles.commonTable} ${styles.companyTable}`}>
      <caption>{caption}</caption>
      <colgroup>
        <col style={{ width: '175px' }} />
        <col style={{ width: 'auto' }} />
        <col style={{ width: '175px' }} />
        <col style={{ width: 'auto' }} />
      </colgroup>
      <tbody>
        <tr>
          <th>
            <LabelWithRequired label="사업자등록번호" required />
          </th>
          <td colSpan={3}>{selectedClient?.brn}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주민 등록 번호" required />
          </th>
          <td>{selectedClient?.resident_registration_number}</td>
          <th>
            <LabelWithRequired label="주민기재분" required />
          </th>
          <td>{selectedClient?.resident_type}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="대표자 성명" required />
          </th>
          <td>{selectedClient?.ceo_name}</td>
          <th>
            <LabelWithRequired label="종 사업장 번호" required />
          </th>
          <td>{selectedClient?.sub_business_number}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업종" required />
          </th>
          <td>{selectedClient?.business_type}</td>
          <th>
            <LabelWithRequired label="종목" required />
          </th>
          <td>{selectedClient?.item}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주소" required />
          </th>
          <td colSpan={3}>{selectedClient?.address}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="연락처" />
          </th>
          <td>{selectedClient?.phone}</td>
          <th>
            <LabelWithRequired label="팩스번호" />
          </th>
          <td>{selectedClient?.fax}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담당(부서)사원" />
          </th>
          <td colSpan={3}>{selectedClient?.manager}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="인쇄할거래처명" />
          </th>
          <td colSpan={3}>{selectedClient?.printable_company_name}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담보설정액" />
          </th>
          <td>{selectedClient?.guarantee_amount}원</td>
          <th>
            <LabelWithRequired label="여신한도액" />
          </th>
          <td>{selectedClient?.credit_limit}원</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주류코드" />
          </th>
          <td colSpan={3}>
            {selectedClient?.product_code}호 / {selectedClient?.product_name}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="입금 계좌 번호" />
          </th>
          <td colSpan={3}>
            <p>{selectedClient?.bank}</p>
            <p>
              <span>예금주 {selectedClient?.account_holder} / 계좌번호 </span>
              <span>{selectedClient?.account_number}</span>
            </p>
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업체담당자이메일" />
          </th>
          <td colSpan={3}>{selectedClient?.email}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래처 분류명" />
          </th>
          <td colSpan={3}>
            {selectedClient?.category1} / {selectedClient?.category2}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래시작(종료)일" />
          </th>
          <td colSpan={3}>
            {selectedClient?.contract_start} ~ {selectedClient?.contract_end}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="비고" />
          </th>
          <td colSpan={3}>{selectedClient?.note || ' '}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="사용여부" />
          </th>
          <td colSpan={3}>{selectedClient?.is_active}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CompanyDetail;
