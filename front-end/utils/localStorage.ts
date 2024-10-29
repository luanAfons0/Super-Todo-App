export const saveInLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = ({ key }: { key: string }) => {
  if (typeof window !== "undefined") {
    const storedItem = localStorage.getItem(key);
    return storedItem;
  }
};

export const deleteFromLocalStorage = ({ key }: { key: string }) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
