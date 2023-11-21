"use client";

import { AuthService } from "@/api/services/auth.service";
import styles from "./Page.module.scss";
import { FormEvent } from "react";

export default function Login() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const login: string = event.target[0].value;
    const password: string = event.target[1].value;

    await AuthService.login({ login, password });
  }

  return (
    <div className={styles.main}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h3>Login</h3>
        <input type="text" placeholder="Логин" />
        <h3>Password</h3>
        <input type="password" placeholder="Пароль" />
        <button type="submit">Вход в аккаунт</button>
      </form>
    </div>
  );
}
