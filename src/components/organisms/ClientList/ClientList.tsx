import CheckBox from '@/components/atoms/CheckBox';
import ClientRow from '@/components/molecules/ClientRow';
import type { ClientType } from '@/types/clientType';
import styles from '@/styles/table.module.css';

interface ClientListProps {
  caption: string;
  clientData: ClientType[];
}

function ClientList({ caption, clientData }: ClientListProps) {
  return (
    <table className={styles.commonTable}>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col" className={styles.th}>
            No
          </th>
          <th scope="col" className={styles.th}>
            <CheckBox />
          </th>
          <th scope="col" className={styles.th}>
            코드
          </th>
          <th scope="col" className={styles.th}>
            거래처명
          </th>
          <th scope="col" className={styles.th}>
            등록번호
          </th>
          <th scope="col" className={styles.th}>
            유형
          </th>
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
