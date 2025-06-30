// utils/formDefaults.ts
import type { CompanyType } from '@/types/companyType';

export const getCompanyDefaultValues = (client: CompanyType | null) => ({
  brn: client?.brn ?? '',
  residentType: client?.resident_type ?? '',
  isActive: client?.is_active ?? '',
  contractStart: client?.contract_start
    ? new Date(client.contract_start)
    : null,
  contractEnd: client?.contract_end ? new Date(client.contract_end) : null,
  registrationNumber: client?.resident_registration_number ?? '',
  ceoName: client?.ceo_name ?? '',
  phone: client?.phone ?? '',
  fax: client?.fax ?? '',
  guaranteeAmount: client?.guarantee_amount ?? '',
  creditLimit: client?.credit_limit ?? '',
  subBusinessNumber: client?.sub_business_number ?? '',
  businessType: client?.business_type ?? '',
  item: client?.item ?? '',
  zipcode: client?.zipcode ?? '',
  address: client?.address ?? '',
  department: client?.department ?? '',
  manager: client?.manager ?? '',
  printableCompanyName: client?.printable_company_name ?? '',
  productCode: client?.product_code ?? '',
  productName: client?.product_name ?? '',
  bank: client?.bank ?? '',
  accountHolder: client?.account_holder ?? '',
  accountNumber: client?.account_number ?? '',
  email: client?.email ?? '',
  category1: client?.category1 ?? '',
  category2: client?.category2 ?? '',
  note: client?.note ?? '',
});
