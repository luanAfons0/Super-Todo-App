"use client";

import { getFromLocalStorage } from "@/utils/localStorage";
import { ColumnContext } from "../WorkspacesTable";
import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import useServer from "@/hook/userServer";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { IdCard } from "lucide-react";
import Button from "../Button";
import Select from "../Select";
import Input from "../Input";

export const colors = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Purple", value: "purple" },
  { label: "Yellow", value: "yellow" },
];

type CreateColumnModal = {
  closeModal: Function;
  lastPosition: number;
};

export const validateName = (name: string) => {
  if (!name || name == "") {
    throw new Error("Column name cant be blank!");
  }
  if (name.length > 15) {
    throw new Error("Column name is too long!");
  }
};

export default function CreateColumnModal({
  lastPosition,
  closeModal,
}: CreateColumnModal) {
  const { updateColumns, setUpdateColumns } = useContext(ColumnContext);
  const account = getFromLocalStorage({ key: "account" });
  const [color, setColor] = useState({ value: "green", label: "Green" });
  const [name, setName] = useState("");
  const { fetchServer } = useServer();
  const { id } = useParams();

  const createColumn = async () => {
    await fetchServer({
      method: "POST",
      route: `/account/${account?.id}/workspaces/${id}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      body: {
        position: lastPosition + 1,
        color: color.value,
        workspace_id: id,
        name: name,
      },
      successMessage: "Column created successfully",
      successAction: closeModal,
    });
  };

  const reloadColumns = () => {
    setUpdateColumns(!updateColumns);
  };

  const submit = () => {
    try {
      validateName(name);
      createColumn();
      reloadColumns();
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
      <div className={styles.inputStyle}>
        <h1>Column color:</h1>
        <div className={styles.select}>
          <div
            className={styles.preview}
            style={{ backgroundColor: color.value }}
          />
          <Select value={color.label} setValue={setColor} options={colors} />
        </div>
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
