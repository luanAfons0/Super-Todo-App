"use client";

import { basicEmailValidation, validatePassword } from "@/utils/validations";
import { saveInLocalStorage } from "@/utils/localStorage";
import { User, LockKeyhole } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";
import LoadingSpinner from "../LoadingSpinner";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function NewAccountBox() {
  const [firstName, setFirstName] = useState("");
  const { fetchServer, loading } = useServer();
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const successAction = (response: Response) => {
    saveInLocalStorage({ key: "account", value: response });
    router.push("/account");
  };

  const submit = async () => {
    try {
      validatePassword({ password });
      basicEmailValidation(email);

      await fetchServer({
        method: "POST",
        route: "account",
        body: {
          first_name: firstName,
          last_name: lastName,
          password: password,
          email: email,
        },
        successMessage: "Account created successfully!",
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
        <h1>Create account!</h1>
      </div>
      <div className={styles.row}>
        <label>First name:</label>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          startIcon={<User />}
        />
      </div>
      <div className={styles.row}>
        <label>Last name:</label>
        <Input
          type="text"
          value={lastName}
          setValue={setLastName}
          startIcon={<User />}
        />
      </div>
      <div className={styles.row}>
        <label>Email:</label>
        <Input
          type="text"
          value={email}
          setValue={setEmail}
          startIcon={<User />}
        />
      </div>
      <div className={styles.row}>
        <label>Password:</label>
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          startIcon={<LockKeyhole />}
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
