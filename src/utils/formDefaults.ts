import type { CompanyType } from '@/types/companyType';

export const getCompanyDefaultValues = (client: CompanyType | null) => ({
  brn: client?.brn ?? '',
  resident_type: client?.resident_type ?? '',
  is_active: client?.is_active ?? '',
  contract_start: client?.contract_start
    ? new Date(client.contract_start)
    : null,
  contract_end: client?.contract_end ? new Date(client.contract_end) : null,
  registration_number: client?.resident_registration_number ?? '',
  ceo_name: client?.ceo_name ?? '',
  phone: client?.phone ?? '',
  fax: client?.fax ?? '',
  guarantee_amount: client?.guarantee_amount ?? '',
  credit_limit: client?.credit_limit ?? '',
  sub_business_number: client?.sub_business_number ?? '',
  business_type: client?.business_type ?? '',
  item: client?.item ?? '',
  zipcode: client?.zipcode ?? '',
  address: client?.address ?? '',
  department: client?.department ?? '',
  manager: client?.manager ?? '',
  printable_company_name: client?.printable_company_name ?? '',
  product_code: client?.product_code ?? '',
  product_name: client?.product_name ?? '',
  bank: client?.bank ?? '',
  account_holder: client?.account_holder ?? '',
  account_number: client?.account_number ?? '',
  email: client?.email ?? '',
  category1: client?.category1 ?? '',
  category2: client?.category2 ?? '',
  note: client?.note ?? '',
});
