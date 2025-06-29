export interface CompanyType {
  // 사업자등록번호
  brn: string;

  // 주민 등록 번호
  resident_registration_number: string;

  // 주민기재분
  resident_type: '부' | '여';

  // 대표자 성명
  ceo_name: string;

  // 종 사업장 번호
  sub_business_number: string;

  // 업종
  business_type: string;

  // 종목
  item: string;

  // 우편번호
  zipcode: string;

  // 주소
  address: string;

  // 연락처
  phone: string;

  // 팩스번호
  fax: string;

  // 부서명 또는 은행명
  department: string;

  // 담당자
  manager: string;

  // 인쇄할 거래처명
  printable_company_name: string;

  // 담보설정액
  guarantee_amount: string;

  // 여신한도액
  credit_limit: string;

  // 주류코드
  product_code: string;

  // 주류코드명
  product_name: string;

  // 은행명
  bank: string;

  // 예금주
  account_holder: string;

  // 계좌번호
  account_number: string;

  // 업체담당자 이메일
  email: string;

  // 거래처 분류명1
  category1: string;

  // 거래처 분류명2
  category2: string;

  // 거래 시작일 (yyyy-mm-dd)
  contract_start: string;

  // 거래 종료일 (yyyy-mm-dd)
  contract_end: string;

  // 비고
  note: string | null;

  // 사용 여부
  is_active: '여' | '부';
}
