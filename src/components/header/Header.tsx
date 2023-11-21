import Link from "next/link";
import styles from "./Header.module.scss";
import { useAuth } from "@/hooks/useAuth";

export default async function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>ВТК-К</Link>
      </div>
      <ul className={styles.links}>
        {(await useAuth()) ? (
          <li className={styles.link}>
            <Link href={"/profile"}>Профиль</Link>
          </li>
        ) : null}
        <li className={styles.link}>
          <Link href={"/teachers"}>Учителя</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/posts"}>Посты</Link>
        </li>
        <li className={styles.link}>
          <Link href={"/auth/login"}>Логин</Link>
        </li>
      </ul>
    </div>
  );
}
