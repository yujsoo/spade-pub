import LabelWithRequired from '@/components/atoms/LabelWithRequired';
import commonTableStyles from '@/styles/table.module.css';
import styles from './CompanyDetail.module.css';

interface CompanyDetailProps {
  caption: string;
}

function CompanyDetail({ caption }: CompanyDetailProps) {
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
          <td colSpan={3}>111-11-1111</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주민 등록 번호" required />
          </th>
          <td>111111-1111111</td>
          <td>
            <LabelWithRequired label="주민기재분" required />
          </td>
          <td>부</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="대표자 성명" required />
          </th>
          <td>김대표</td>
          <th>
            <LabelWithRequired label="종 사업장 번호" required />
          </th>
          <td>11</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업종" required />
          </th>
          <td>서비스업</td>
          <th>
            <LabelWithRequired label="종목" required />
          </th>
          <td>종목</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="주소" required />
          </th>
          <td colSpan={3}>
            (150-800) 서울특별시 영등포구 영등포로 129 (당산동 1가) 120
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="연락처" />
          </th>
          <td>02-111-1111</td>
          <th>
            <LabelWithRequired label="팩스번호" />
          </th>
          <td>011-111-1111</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담당(부서)사원" />
          </th>
          <td colSpan={3}>ICT 부서 / 김사원</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="인쇄할거래처명" />
          </th>
          <td colSpan={3}>(주)가가상사</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="담보설정액" />
          </th>
          <td>1,000,000원</td>
          <th>
            <LabelWithRequired label="여신한도액" />
          </th>
          <td>1,000,000원</td>
        </tr>

        <tr>
          <th>
            <LabelWithRequired label="주류코드" />
          </th>
          <td colSpan={3}>2208.90-4000호 / 소주</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="인쇄할거래처명" />
          </th>
          <td colSpan={3}>
            <p>국민은행</p>
            <p>예금주 김대표 / 계좌번호 11111111111111</p>
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="업체담당자이메일" />
          </th>
          <td colSpan={3}>kim111@gagasangsa.com</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래처 분류명" />
          </th>
          <td colSpan={3}>
            (A) 농업, 임업 및 어업(01~03) / (01110) 곡물 및 기타 식량작물 재배업
          </td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="거래시작(종료)일" />
          </th>
          <td colSpan={3}>2025-06-01 ~ 2025-06-12</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="비고" />
          </th>
          <td colSpan={3}>{' '}</td>
        </tr>
        <tr>
          <th>
            <LabelWithRequired label="사용여부" />
          </th>
          <td colSpan={3}>여</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CompanyDetail;
