import { ENDPOINT } from "@/constants";
import styles from "./page.module.css";
import UiBtn from "@/components/btn/ui-btn";

const getProducts = async () => {
  const response = await fetch(ENDPOINT.getProducts, {
    next: { tags: ["products"] },
  });
  console.log(response);
  return response.ok ? response.json() : [];
};

export default async function Home() {
  const data = await getProducts();
  console.log("use ", JSON.stringify(data));
  return (
    <main className={styles.main}>
      {JSON.stringify(data)}
      <UiBtn />
    </main>
  );
}
