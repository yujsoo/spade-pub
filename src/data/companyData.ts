import type { CompanyType } from '@/types/companyType';

export const companyData: CompanyType[] = [
  {
    // 사업자등록번호
    brn: '111-11-1111',

    // 주민 등록 번호
    resident_registration_number: '111111-1111111',

    // 주민기재분
    resident_type: '부',

    // 대표자 성명
    ceo_name: '김대표',

    // 종 사업장 번호
    sub_business_number: '11',

    // 업종
    business_type: '서비스업',

    // 종목
    item: '종목',

    // 우편번호
    zipcode: '150-800',

    // 주소
    address: '서울특별시 영등포구 영등포로 129 (당산동1가) 120',

    // 연락처
    phone: '02-111-1111',

    // 팩스번호
    fax: '011-111-1111',

    // 부서명 또는 은행명
    department: '국민은행',

    // 담당자
    manager: '김대표',

    // 인쇄할 거래처명
    printable_company_name: '(주)가가상사',

    // 담보설정액
    guarantee_amount: '1,000,000원',

    // 여신한도액
    credit_limit: '1,000,000원',

    // 주류코드
    product_code: '2208.90-4000호',

    // 주류코드명
    product_name: '소주',

    // 은행명
    bank: '국민은행',

    // 예금주
    account_holder: '김대표',

    // 계좌번호
    account_number: '11111111111111',

    // 업체담당자 이메일
    email: 'kim111@gagasangsa.com',

    // 거래처 분류명1
    category1: '(A) 농업, 임업 및 어업(01~03)',

    // 거래처 분류명2
    category2: '(01110) 곡물 및 기타 식량작물 재배업',

    // 거래 시작일 (yyyy-mm-dd)
    contract_start: '2025-06-01',

    // 거래 종료일 (yyyy-mm-dd)
    contract_end: '2025-06-12',

    // 비고
    note: '',

    // 사용여부
    is_active: '여',
  },
];
