"use client";

import { deleteFromLocalStorage, getFromLocalStorage } from "@/utils/localStorage";
import { basicEmailValidation, validatePassword } from "@/utils/validations";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useServer from "@/hook/userServer";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import Button from "../Button";
import Input from "../Input";

export default function UserInfos() {
  const account = getFromLocalStorage({ key: "account" });

  const [firstName, setFirstName] = useState(account?.first_name);
  const [lastName, setLastName] = useState(account?.last_name);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(account?.email);
  const [password, setPassword] = useState("");
  const { fetchServer, loading } = useServer();
  const router = useRouter();

  const validateUser = async () => {
    const localStorageAccount = getFromLocalStorage({ key: "account" });

    await fetchServer({
      method: "GET",
      route: `account/${localStorageAccount?.id}`,
      headers: { Authorization: `Bearer ${localStorageAccount?.token}` },
    });
  };

  useEffect(() => {
    validateUser();
  }, []);

  const editFunction = () => {
    try {
      validatePassword({ password: password, newPassword: confirmPassword });
      basicEmailValidation(email);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const logoutFunction = () => {
    deleteFromLocalStorage({ key: "account" });
    toast.success("Logout successfully!");
    router.push("/");
  }

  return (
    <div className={styles.container}>
      {loading && <LoadingSpinner />}
      <div className={styles.box}>
        <div className={styles.row}>
          <div className={styles.item}>
            <label>First Name:</label>
            <Input setValue={setFirstName} type="text" value={firstName} />
          </div>
          <div className={styles.item}>
            <label>Last Name:</label>
            <Input setValue={setLastName} type="text" value={lastName} />
          </div>
          <div className={styles.item}>
            <label>Email:</label>
            <Input setValue={setEmail} type="text" value={email} />
          </div>
          <div className={styles.item}>
            <label>Password:</label>
            <Input setValue={setPassword} type="password" value={password} />
          </div>
          <div className={styles.item}>
            <label>Confirm password:</label>
            <Input
              setValue={setConfirmPassword}
              type="password"
              value={confirmPassword}
            />
          </div>
        </div>
        <hr />
        <div className={styles.buttonRow}>
          <Button
            buttonText="Logout"
            onClick={logoutFunction}
          />
          <Button
            buttonText="Edit"
            onClick={editFunction}
          />
        </div>
      </div>
    </div>
  );
}