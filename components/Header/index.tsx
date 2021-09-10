import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.item}>
          <Link href="/user">User</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
