import { headers } from 'next/headers';
import styles from './page.module.css';

export default function Home(): JSX.Element {
  const head = headers().get('accept-language');
  console.log('lang', head);
  return <main className={styles.main}>home</main>;
}
