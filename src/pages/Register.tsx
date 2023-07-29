import React from "react";
import { Link } from "react-router-dom";
import MiddleBox from "../components/MiddleBox/MiddleBox";
import { Typography, Container, Button } from "@mui/material";
import PasswordField from "../components/Inputs/PasswordField";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../components/Inputs/InputField";
import { UserContext } from "../contexts/UserProvider";
import Toast from "../components/Toast/Toast";

interface IFormInput {
  email: string;
  password: string;
  passwordRepeat: string;
}

const Register = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState<boolean>(false);
  const { registerUser }: any = React.useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password, passwordRepeat } = data;
    if (password === passwordRepeat) {
      const isSuccessful = await registerUser(email, password);
      if (isSuccessful) {
        setOpen(true);
        reset();
      } else {
        setOpenError(true);
      }
    } else {
      setError("passwordRepeat", {
        type: "passwordDidNotMatch",
        message: "Password did not match.",
      });
    }
  };

  return (
    <Container>
      <Toast
        open={open}
        setOpen={setOpen}
        message="Successful! User Added to the Database."
      />
      <Toast
        open={openError}
        setOpen={setOpenError}
        message="Failed! User did not added to the Database."
      />
      <Typography variant="h4" align="center" gutterBottom>
        Register page
      </Typography>
      <MiddleBox>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            margin: "1rem 0"
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField control={control} name="email" errors={errors} />
          <PasswordField
            control={control}
            name="password"
            text={"Password"}
            errors={errors}
          />
          <PasswordField
            control={control}
            name="passwordRepeat"
            text={"Password Again"}
            errors={errors}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
        <Typography variant="body2">Already a user!</Typography>
        <Link to="/sign-in">Go to sign in page</Link>
      </MiddleBox>
    </Container>
  );
};

export default Register;
