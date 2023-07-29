import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useController } from "react-hook-form";

const PasswordField = ({ name, control, text, errors }: any) => {
  const { field } = useController({
    name,
    control,
    rules: { required: "Password is required." },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ width: "30ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {`Your ${text}`}
      </InputLabel>
      <OutlinedInput
        error={!!errors?.passwordRepeat}
        value={field.value}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        inputRef={field.ref}
        type={showPassword ? "text" : "password"}
        label={`Your ${text}`}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        required
      />
      <FormHelperText>{errors?.passwordRepeat?.message}</FormHelperText>
    </FormControl>
  );
};

export default PasswordField;
