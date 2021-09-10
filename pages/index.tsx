import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout pageTitle="Home">
      <h1 className={styles['title-homepage']}>Welcome to NextJs Basic</h1>
      <Image src="/kaos.jpg" width={200} height={200} />
    </Layout>
  );
}

export default Home;
