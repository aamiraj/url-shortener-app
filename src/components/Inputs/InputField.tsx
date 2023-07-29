import React from "react";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const InputField = ({ control, name, errors }: any) => {
  const { field } = useController({
    name,
    control,
    rules: { required: "Email is required." },
  });

  return (
    <TextField
      error={!!errors?.email}
      helperText={errors?.email?.message}
      sx={{ width: "30ch" }}
      type="email"
      label={`Your ${name}`}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      required
    />
  );
};

export default InputField;
