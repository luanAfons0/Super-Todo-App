"use client"

import useServer from "@/hook/userServer";
import styles from "./styles.module.scss";
import LoadingSpinner from "../LoadingSpinner";
import { useEffect } from "react";
import { getFromLocalStorage } from "@/utils/localStorage";

export default function UserInfos() {
    const { fetchServer, loading } = useServer()

    const successAction = () => {
        // Set user infos -- TODO
    }

    const getUserInfos = async () => {
        const localStorageAccount = getFromLocalStorage({ key: "account" })

        await fetchServer({
            method: "GET",
            route: `account/${localStorageAccount?.id}`,
            headers: { Authorization: `Bearer ${localStorageAccount?.token}` },
            successAction
        })
    }

    useEffect(() => {
        getUserInfos()
    }, [])

    return (
        <div className={styles.container}>
            {loading && <LoadingSpinner />}
            <h1>User infos here...</h1>
        </div>
    )
}