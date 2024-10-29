import { useState } from "react";
import { toast } from "react-toastify";

type RequestObj = {
  method: "POST" | "GET" | "PATCH" | "PUT" | "DELETE";
  route: string;
  body: any;
  successMessage?: string | undefined;
  successAction: Function;
};

const showErrors = (errors: string[]) => {
  errors.forEach((error) => {
    toast.error(error);
  });
};

export default function useServer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);

  const fetchServer = async ({
    method,
    route,
    body,
    successMessage,
    successAction,
  }: RequestObj) => {
    setLoading(true);

    const request = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}${route}`,
      {
        method: method,
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const response = await request.json();

    setSuccess(response.ok);
    setLoading(false);

    if (request.ok === false) {
      showErrors(response.errors ?? [response.message]);
    } else {
      successAction(response);

      if (successMessage) {
        toast.success(successMessage);
      }
    }

    return response;
  };

  return { fetchServer, loading, success };
}
