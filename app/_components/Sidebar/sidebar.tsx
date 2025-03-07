import { ReactElement } from "react";
import Logo from "../Logo";
import styles from "./sidebar.module.css";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  links?: ReactElement[];
}

export default function Sidebar({ links, ...sidebarProps }: SidebarProps) {
  return (
    <aside className={styles.sidebar} {...sidebarProps}>
      <Logo height={40} style={{ marginBottom: "4rem" }} />
      {links ? links.map((item, index) => <div key={index}>{item}</div>) : null}
      <div className={styles.spacer} />
      <div className={styles.user}>
        <div className={styles.avatar}>
          <p>A</p>
        </div>
        <p>Admin</p>
      </div>
    </aside>
  );
}
