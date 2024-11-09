"use client";

import { basicEmailValidation, validatePassword } from "@/utils/validations";
import { saveInLocalStorage } from "@/utils/localStorage";
import { User, LockKeyhole } from "lucide-react";
import LoadingSpinner from "../LoadingSpinner";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";


export default function LoginBox() {
  const { fetchServer, loading } = useServer();
  const [password, setPassword] = useState("");
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
          buttonText="Login"
        />
        <div style={{ marginTop: "1rem" }}>
          Not a member? <a href="/new-account">Register now</a>
        </div>
      </div>
    </div>
  );
}
