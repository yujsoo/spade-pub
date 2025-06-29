import CheckBox from '@/components/atoms/CheckBox';
import styles from './ClientRow.module.css';
import type { ClientType } from '@/types/clientType';

interface ClientRowProps {
  item: ClientType;
  isActive: boolean;
  onClick: () => void;
}

function ClientRow({ item, isActive, onClick }: ClientRowProps) {
  return (
    <tr onClick={onClick} className={isActive ? styles.activeRow : ''}>
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
