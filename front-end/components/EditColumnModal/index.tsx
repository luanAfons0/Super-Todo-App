"use client";

import { colors, validateName } from "../CreateColumnModal";
import { getFromLocalStorage } from "@/utils/localStorage";
import { ColumnContext } from "../WorkspacesTable";
import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";
import { toast } from "react-toastify";
import Select from "../Select";
import Button from "../Button";
import Input from "../Input";

type EditColumnModal = {
  closeModal: Function;
  columnName: string;
  column_id: number;
  columnColor: { value: string; label: string };
};

export default function EditColumnModal({
  columnColor,
  columnName,
  closeModal,
  column_id,
}: EditColumnModal) {
  const { updateColumns, setUpdateColumns } = useContext(ColumnContext);
  const account = getFromLocalStorage({ key: "account" });
  const [color, setColor] = useState(columnColor);
  const [name, setName] = useState(columnName);
  const { fetchServer } = useServer();
  const { id } = useParams();

  const updateColumn = async () => {
    await fetchServer({
      method: "PATCH",
      route: `/account/${account?.id}/workspaces/${id}/column/${column_id}`,
      headers: {
        Authorization: `Bearer ${account?.token}`,
      },
      body: {
        color: color.value,
        name: name,
      },
      successMessage: "Column updated successfully",
      successAction: closeModal,
    });
  };

  const reloadColumns = () => {
    setUpdateColumns(!updateColumns);
  };

  const submit = () => {
    try {
      validateName(name);
      updateColumn();
      reloadColumns();
    } catch (error: any) {
      toast.warning(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>Name:</h1>
        <Input
          placeHolder={columnName}
          type="text"
          value={name}
          setValue={setName}
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
          buttonText="Update"
          customStyle={{ padding: ".5rem" }}
        />
      </div>
    </div>
  );
}
