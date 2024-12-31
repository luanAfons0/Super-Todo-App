"use client";

import { getFromLocalStorage } from "@/utils/localStorage";
import { useParams } from "next/navigation";
import useServer from "@/hook/userServer";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { IdCard } from "lucide-react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

type CreateColumnModal = {
  closeModal: Function;
};

export default function CreateColumnModal({ closeModal }: CreateColumnModal) {
  const account = getFromLocalStorage({ key: "account" });
  const [name, setName] = useState("");
  const { fetchServer } = useServer();
  const { id } = useParams();

  const validateName = () => {
    if (!name || name == "") {
      throw new Error("Column name cant be blank!");
    }
    if (name.length > 15) {
      throw new Error("Column name is too long!");
    }
  };

  const createColumn = async () => {
    await fetchServer({
      method: "POST",
      route: `/account/${account?.id}/workspaces/${id}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      body: {
        name: name,
        workspace_id: id,
      },
      successMessage: "Column created successyfuly",
      successAction: closeModal,
    });
  };

  const submit = () => {
    try {
      validateName();
      createColumn();
    } catch (error: any) {
      toast.warning(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputStyle}>
        <h1>Column Name:</h1>
        <Input
          type="text"
          value={name}
          setValue={setName}
          startIcon={<IdCard />}
        />
      </div>
      <div className={styles.buttonRow}>
        <Button
          onClick={submit}
          buttonText="Create"
          customStyle={{ padding: ".5rem" }}
        />
      </div>
    </div>
  );
}
