import CheckBox from '@/components/atoms/CheckBox';

import type { ClientType } from '@/types/clientType';

interface ClientRowProps {
  item: ClientType;
}

function ClientRow({ item }: ClientRowProps) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <CheckBox />
      </td>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>{item.brn}</td>
      <td>{item.type}</td>
    </tr>
  );
}

export default ClientRow;
