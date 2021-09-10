/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';
import styles from '../../styles/User.module.css';

interface UserProps {
  dataUsers: Array<any>;
}

function index(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="User">
      {dataUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/user/${user.id}`)}
          className={styles.card}
          aria-hidden="true"
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
