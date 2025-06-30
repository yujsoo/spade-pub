import styles from './CompanyDetail.module.css';
import commonTableStyles from '@/styles/table.module.css';
import Button from '@/components/atoms/Button';
import LabelWithRequired from '@/components/atoms/LabelWithRequired';
import type { CompanyType } from '@/types/companyType';

interface CompanyDetailProps {
  caption: string;
  selectedClient: CompanyType | null;
  isEditMode: boolean;
}

function CompanyDetail({
  caption,
  selectedClient,
  isEditMode,
}: CompanyDetailProps) {
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
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.brn} />
                <Button text="사업자등록상태 조회" variant="white" />
              </>
            ) : (
              selectedClient?.brn
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주민 등록 번호" required />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.resident_registration_number}
                />
              </>
            ) : (
              selectedClient?.resident_registration_number
            )}
          </td>
          <th>
            <LabelWithRequired label="주민기재분" required />
          </th>
          <td>
            {isEditMode ? (
              <>{/* radio 컴포넌트 자리 */}</>
            ) : (
              selectedClient?.resident_type
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="대표자 성명" required />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.ceo_name} />
              </>
            ) : (
              selectedClient?.ceo_name
            )}
          </td>
          <th>
            <LabelWithRequired label="종 사업장 번호" required />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.sub_business_number}
                />
              </>
            ) : (
              selectedClient?.sub_business_number
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업종" required />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.business_type}
                />
              </>
            ) : (
              selectedClient?.business_type
            )}
          </td>
          <th>
            <LabelWithRequired label="종목" required />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.item} />
              </>
            ) : (
              selectedClient?.item
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주소" required />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.zipcode} />
                <Button text="우편번호 검색" variant="white" />
                <input type="text" defaultValue={selectedClient?.address} />
              </>
            ) : (
              <>
                {`(${selectedClient?.zipcode}) `}
                {selectedClient?.address}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="연락처" />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.phone} />
              </>
            ) : (
              selectedClient?.phone
            )}
          </td>
          <th>
            <LabelWithRequired label="팩스번호" />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.fax} />
              </>
            ) : (
              selectedClient?.fax
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담당(부서)사원" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <div>
                  <span>부서명</span>
                  <input
                    type="text"
                    defaultValue={selectedClient?.department}
                  />
                </div>
                <div>
                  <span>담당자</span>
                  <input type="text" defaultValue={selectedClient?.manager} />
                </div>
              </>
            ) : (
              <>
                {selectedClient?.department} / {selectedClient?.manager}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="인쇄할거래처명" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.printable_company_name}
                />
              </>
            ) : (
              selectedClient?.printable_company_name
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담보설정액" />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.guarantee_amount}
                />
                <span>원</span>
              </>
            ) : (
              selectedClient?.guarantee_amount
            )}
          </td>
          <th>
            <LabelWithRequired label="여신한도액" />
          </th>
          <td>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.credit_limit}
                />
                <span>원</span>
              </>
            ) : (
              selectedClient?.credit_limit
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주류코드" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  defaultValue={selectedClient?.product_code}
                />
                <input
                  type="text"
                  defaultValue={selectedClient?.product_name}
                />
              </>
            ) : (
              <>
                {selectedClient?.product_code}호 /{' '}
                {selectedClient?.product_name}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="입금 계좌 번호" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <div>
                  <span>은행</span>
                  <input type="text" defaultValue={selectedClient?.bank} />
                </div>
                <div>
                  <span>예금주</span>
                  <input
                    type="text"
                    defaultValue={selectedClient?.account_holder}
                  />
                </div>
                <div>
                  <span>계좌번호</span>
                  <input
                    type="text"
                    defaultValue={selectedClient?.account_number}
                  />
                </div>
              </>
            ) : (
              <>
                <p>{selectedClient?.bank}</p>
                <p>
                  <span>
                    예금주 {selectedClient?.account_holder} / 계좌번호{' '}
                  </span>
                  <span>{selectedClient?.account_number}</span>
                </p>
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업체담당자이메일" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.email} />
              </>
            ) : (
              selectedClient?.email
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래처 분류명" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.category1} />
                <input type="text" defaultValue={selectedClient?.category2} />
              </>
            ) : (
              <>
                {selectedClient?.category1} / {selectedClient?.category2}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래시작(종료)일" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>{/* datepicker 컴포넌트 자리 */}</>
            ) : (
              <>
                {selectedClient?.contract_start} ~{' '}
                {selectedClient?.contract_end}
              </>
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="비고" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>
                <input type="text" defaultValue={selectedClient?.note ?? ''} />
              </>
            ) : (
              selectedClient?.note || ' '
            )}
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="사용여부" />
          </th>
          <td colSpan={3}>
            {isEditMode ? (
              <>{/* radio 컴포넌트 자리 */}</>
            ) : (
              selectedClient?.is_active
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CompanyDetail;
