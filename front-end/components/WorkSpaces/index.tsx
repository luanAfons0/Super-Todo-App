"use client"

import { useEffect, useState } from "react";
import WorkSpaceCard, { TypeWorkSpaceCard } from "../WorkSpaceCard";
import styles from "./styles.module.scss";
import useServer from "@/hook/userServer";

export default function WorkSpaces() {
  const [workSpaces, setWorkSpaces] = useState<TypeWorkSpaceCard[]>([]);
  const { fetchServer, loading } = useServer();


  useEffect(() => {
    const getUserWorkSpaces = async () => {
      // const response = await fetchServer({ method: "GET", route: "/account/:id/workspaces" });
      setWorkSpaces([{ id: 0, description: "Click to create a workspace.", name: "Create workspace." }])
    }

    getUserWorkSpaces()
  }, [])

  return (
    <div className={styles.container}>
      <h1>Your WorkSpaces:</h1>
      <hr />
      <div className={styles.box}>
        {workSpaces.map((item, index) => {
          return <WorkSpaceCard description={item.description} id={item.id} name={item.name} key={index} />
        })}
      </div>
    </div>
  );
}
