"use client";

import { AdminService } from "@/api/services/admin.service";
import { FormEvent } from "react";

export default function CreateTeacher() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const login: string = event.target[0].value;
    const password: string = event.target[1].value;

    await AdminService.createTeacher({ login, password });
  }

  return (
    <div>
      <h1>Create Teacher</h1>
      <form onSubmit={onSubmit}>
        <h3>Login</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="password" />
        <button>Create</button>
      </form>
    </div>
  );
}
