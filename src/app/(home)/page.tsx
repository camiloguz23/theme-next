import { ENDPOINT } from "@/constants";
import styles from "./page.module.css";

const getProducts = async () => {
  const response = await fetch(ENDPOINT.getProducts, {
    next: { tags: ["products"] },
  });
  return response.json();
};

export default async function Home() {
  const data = await getProducts();

  return (
    <main className={styles.main}>
      {JSON.stringify(data)}
    </main>
  );
}
