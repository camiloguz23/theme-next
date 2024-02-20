import { ENDPOINT } from "@/constants";
import styles from "./page.module.css";
import UiBtn from "@/components/btn/ui-btn";
import { BtnSettings } from "@/components";


export default async function Home() {

  return (
    <main className={styles.main}>
      <BtnSettings />
    </main>
  );
}
