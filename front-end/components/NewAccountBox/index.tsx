"use client";

import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { userIcon, lockIcon } from "@/public/icons";
import { toast } from "react-toastify";
import useServer from "@/hook/userServer";
import LoadingSpinner from "../LoadingSpinner";

export default function NewAccountBox() {
  const { fetchServer, loading } = useServer();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const validateEmail = () => {
    const isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

    if (!isValid) {
      throw new Error("The inserted email is invalid.");
    }
  };

  const submit = async () => {
    try {
      validateEmail();

      await fetchServer({
        method: "POST",
        route: "account",
        body: {
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName,
        },
        successMessage: "Account created successfully!",
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <LoadingSpinner />}
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
          onClick={submit}
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
