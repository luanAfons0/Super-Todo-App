"use client";

import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { userIcon, lockIcon } from "@/public/icons";

export default function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const basicValidation = () => {
    window.alert("Login!");
  };

  return (
    <div className={styles.container}>
      <form method="POST">
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
            onClick={basicValidation}
            customStyle={{ margin: "0" }}
            buttonText="Login"
          />
          <div style={{ marginTop: "1rem" }}>
            Not a member? <a href="/new-account">Register now</a>
          </div>
        </div>
      </form>
    </div>
  );
}
