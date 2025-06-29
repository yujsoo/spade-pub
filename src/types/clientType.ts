export interface ClientType {
  id: string;
  code: string;
  name: string;
  brn: string;
  type: '매출' | '매입' | '동시';
  companyId: string;
}
