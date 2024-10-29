import { useState } from "react";
import { toast } from "react-toastify";

type RequestObj = {
  method: "POST" | "GET" | "PATCH" | "PUT" | "DELETE";
  route: string;
  body: any;
  successMessage?: string | undefined;
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
    setLoading(false);

    if (response.errors) {
      setSuccess(false);
      showErrors(response.errors);
    } else {
      setSuccess(true);

      if (successMessage) {
        toast.success(successMessage);
      }
    }

    return response;
  };

  return { fetchServer, loading, success };
}
