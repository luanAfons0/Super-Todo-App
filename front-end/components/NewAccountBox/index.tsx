"use client";

import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { userIcon, lockIcon } from "@/public/icons";

export default function NewAccountBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const basicValidation = () => {
    window.alert("Signup!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>Create account!</h1>
      </div>
      <div className={styles.row}>
        <label>First name:</label>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          startIcon={userIcon}
        />
      </div>
      <div className={styles.row}>
        <label>Last name:</label>
        <Input
          type="text"
          value={lastName}
          setValue={setLastName}
          startIcon={userIcon}
        />
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
          buttonText="Sign up"
        />
        <div style={{ marginTop: "1rem" }}>
          Already a member? <a href="/login">Login now</a>
        </div>
      </div>
    </div>
  );
}
