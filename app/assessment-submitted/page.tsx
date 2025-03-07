import Link from "next/link";
import Icon from "../_components/Icon";
import styles from "./page.module.css";

export default function Assessment() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Icon name="info" />
        <h3>Thank You</h3>
        <p>
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>

        <Link href="/">Go Back to Homepage</Link>
      </main>
    </div>
  );
}
