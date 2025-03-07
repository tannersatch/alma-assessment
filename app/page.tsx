import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/assessment">Take an Assessment</Link>
        <Link href="/lead-management">Lead Management</Link>
      </main>
    </div>
  );
}
