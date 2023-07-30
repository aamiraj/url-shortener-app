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
}

const SignIn = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState<boolean>(false);
  const { signInWithEmail }: any = React.useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;

    const isSuccessful = await signInWithEmail(email, password);
    if (isSuccessful) {
      setOpen(true);
      reset();
    } else {
      setOpenError(true);
    }
  };

  return (
    <Container>
      <Toast
        open={open}
        setOpen={setOpen}
        message="Successful! User is logged in."
      />
      <Toast
        open={openError}
        setOpen={setOpenError}
        message="Failed! User cannot log in."
      />
      <Typography variant="h4" align="center" gutterBottom>
        Sign in page
      </Typography>
      <MiddleBox>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            margin: "1rem 0",
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
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
        <Typography variant="body2">Haven't registered yet!</Typography>
        <Link to="/register">Go to register page</Link>
      </MiddleBox>
    </Container>
  );
};

export default SignIn;
