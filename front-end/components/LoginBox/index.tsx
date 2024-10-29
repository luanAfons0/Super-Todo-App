"use client";

import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { userIcon, lockIcon } from "@/public/icons";
import useServer from "@/hook/userServer";
import LoadingSpinner from "../LoadingSpinner";
import { basicEmailValidation } from "@/utils/validations";
import { toast } from "react-toastify";
import { saveInLocalStorage } from "@/utils/localStorage";

export default function LoginBox() {
  const [email, setEmail] = useState("");
  const { fetchServer, loading } = useServer();
  const [password, setPassword] = useState("");

  const successAction = (response: Response) => {
    saveInLocalStorage({ key: "account", value: response });
  };

  const submit = async () => {
    try {
      basicEmailValidation(email);

      await fetchServer({
        method: "POST",
        route: "auth/login",
        body: {
          email: email,
          password: password,
        },
        successMessage: "Login successfully!",
        successAction,
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <LoadingSpinner />}
      <div className={styles.row}>
        <h1>Welcome back!</h1>
      </div>
      <div className={styles.row}>
        <label>Email:</label>
        <Input
          type="text"
          value={email}
          setValue={setEmail}
          startIcon={userIcon}
        />
      </div>
      <div className={styles.row}>
        <label>Password:</label>
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          startIcon={lockIcon}
        />
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <div className={styles.row}>
        <Button
          onClick={submit}
          customStyle={{ margin: "0" }}
          buttonText="Login"
        />
        <div style={{ marginTop: "1rem" }}>
          Not a member? <a href="/new-account">Register now</a>
        </div>
      </div>
    </div>
  );
}
