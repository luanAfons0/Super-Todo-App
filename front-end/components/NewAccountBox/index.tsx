"use client";

import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";
import { userIcon, lockIcon } from "@/public/icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function NewAccountBox() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const showErrors = (errors: string[]) => {
    errors.forEach((error) => {
      toast.error(error)
    })
  }

  const validateEmail = () => {
    const isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!isValid) {
      throw new Error("The inserted email is invalid.")
    }
  };

  const submit = async () => {
    try {
      validateEmail()

      const response = await (await fetch("http://localhost:5000/account", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName
        })
      })).json()

      if (response.errors) {
        showErrors(response.errors)
        return
      }

      toast.success("Account created successfully!")
      router.push("/login")
    } catch (error) {
      toast.error((error as Error).message)
    }
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
