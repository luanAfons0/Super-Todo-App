export const basicEmailValidation = (email: string) => {
  const isValid = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  if (!isValid) {
    throw new Error("The inserted email is invalid.");
  }
};

export const validatePassword = ({
  password,
  newPassword,
}: {
  password: string;
  newPassword?: string;
}) => {
  if (newPassword || newPassword == "") {
    if (password !== "" && newPassword === "") {
      throw new Error("Confirm password cannot be empty.");
    }

    if (newPassword !== password) {
      throw new Error("Passwords do not match.");
    }
  }

  if (password !== "" && password.length <= 5) {
    throw new Error("Password is to short.");
  }
};
