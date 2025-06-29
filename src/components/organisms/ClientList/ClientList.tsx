import CheckBox from '@/components/atoms/CheckBox';
import ClientRow from '@/components/molecules/ClientRow';
import type { ClientType } from '@/types/clientType';

interface ClientListProps {
  caption: string;
  clientData: ClientType[];
}

function ClientList({ caption, clientData }: ClientListProps) {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">
            <CheckBox />
          </th>
          <th scope="col">코드</th>
          <th scope="col">거래처명</th>
          <th scope="col">등록번호</th>
          <th scope="col">유형</th>
        </tr>
      </thead>
      <tbody>
        {clientData.map((item) => (
          <ClientRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default ClientList;
