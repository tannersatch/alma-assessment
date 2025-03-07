import Logo from "../Logo";
import styles from "./header.module.css";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string | string[];
}

export default function Header({ text, ...headerProps }: HeaderProps) {
  return (
    <header className={styles.hero} {...headerProps}>
      <Logo />
      {typeof text === "string" ? (
        <h1 className={styles.title}>{text}</h1>
      ) : null}
      {typeof text === "object"
        ? text.map((title, index) => (
            <h1 key={index} className={styles.title}>
              {title}
            </h1>
          ))
        : null}
    </header>
  );
}
