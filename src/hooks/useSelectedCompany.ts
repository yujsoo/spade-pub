import { useMemo } from 'react';
import type { ClientType } from '@/types/clientType';
import type { CompanyType } from '@/types/companyType';

function useSelectedCompany(
  selectedId: string | null,
  clientData: ClientType[],
  companyData: CompanyType[],
): CompanyType | null {
  // clientData 조회
  const clientMap = useMemo(() => {
    return new Map(clientData.map((data) => [data.id, data]));
  }, []);

  // companyData 조회
  const companyMap = useMemo(() => {
    return new Map(companyData.map((data) => [data.id, data]));
  }, []);

  if (!selectedId) return null;

  const selectedClient = clientMap.get(selectedId);
  return selectedClient
    ? (companyMap.get(selectedClient.companyId) ?? null)
    : null;
}

export default useSelectedCompany;
