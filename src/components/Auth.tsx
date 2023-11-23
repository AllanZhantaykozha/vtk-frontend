"use client";

import { AuthService } from "@/api/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => await AuthService.login({ login, password }),
    onSuccess: () => {
      <div>Success</div>;
      setLogin("");
      setPassword("");
      queryClient.invalidateQueries(["teachers"]);
    },
    onError: () => {
      <div>Something went wrong</div>;
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        type="text"
        placeholder="login"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
      />
      <button onClick={() => mutate()}>Submit</button>
    </div>
  );
};

export default Auth;
