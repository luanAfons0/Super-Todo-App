"use client";

import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  saveInLocalStorage,
} from "@/utils/localStorage";
import { basicEmailValidation, validatePassword } from "@/utils/validations";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useServer from "@/hook/userServer";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import Button from "../Button";
import Input from "../Input";

type Account = {
  first_name: string;
  last_name: string;
  email: string;
  token: string;
  id: Number;
};

export default function UserInfos() {
  const account = getFromLocalStorage({ key: "account" });

  const [firstName, setFirstName] = useState(account?.first_name);
  const [lastName, setLastName] = useState(account?.last_name);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(account?.email);
  const [password, setPassword] = useState("");
  const { fetchServer, loading } = useServer();
  const router = useRouter();

  useEffect(() => {
    const validateUser = async () => {
      await fetchServer({
        method: "GET",
        route: `account/${account?.id}`,
        headers: { Authorization: `Bearer ${account?.token}` },
      });
    };
    validateUser();
  }, []);

  const editSuccess = (account: Account) => {
    saveInLocalStorage({ key: "account", value: account });
  };

  const editFunction = async () => {
    try {
      validatePassword({ password: password, newPassword: confirmPassword });
      basicEmailValidation(email);

      await fetchServer({
        method: "PATCH",
        route: "/account/update",
        headers: { Authorization: `Bearer ${account?.token}` },
        body: {
          first_name: firstName,
          last_name: lastName,
          password,
          email,
        },
        successAction: editSuccess,
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const logoutFunction = () => {
    deleteFromLocalStorage({ key: "account" });
    toast.success("Logout successfully!");
    router.push("/");
  };

  return (
    <div className={styles.container}>
      {loading && <LoadingSpinner />}
      <div className={styles.box}>
        <h1>Account infos:</h1>
        <hr />
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
          <Button buttonText="Logout" onClick={logoutFunction} />
          <Button buttonText="Edit" onClick={editFunction} />
        </div>
      </div>
    </div>
  );
}
