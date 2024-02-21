import styles from './page.module.css';
import { BtnSettings } from '@/components';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <BtnSettings />
    </main>
  );
}
