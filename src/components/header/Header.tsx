"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { Token } from "@/api/auth.helper";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>ВТК-К</Link>
      </div>
      <ul className={styles.links}>
        {Token.getAcessToken() ? (
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
          <Link href={"/login"}>Логин</Link>
        </li>
      </ul>
    </div>
  );
}
