import { FC } from "react";
import { TextField } from "@mui/material";
import { useState } from "react";

type SearchInputProps = {
  debouncedHandler: (e: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ debouncedHandler }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedHandler(e.target.value);
  };

  return (
    <TextField
      label="Поиск по названию"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};
