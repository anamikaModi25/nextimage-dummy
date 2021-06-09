import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Next js Image</h1>
        <p>
          <Link href="/images/base">
            <a>Basic Image</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
