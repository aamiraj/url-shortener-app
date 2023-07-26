import React from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement,
} from "react-hook-form-mui";
import { Box, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const formContext = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { control, handleSubmit } = formContext;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          height: "75vh",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "100%", sm: 580 },
            height: { xs: "100%", sm: 363 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <FormContainer
            formContext={formContext}
            handleSubmit={handleSubmit(onSubmit)}
          >
            <TextFieldElement
              type="email"
              name={"email"}
              label={"Email"}
              control={control}
              fullWidth
              required
            />
            <br />
            <br />
            <PasswordElement
              name={"password"}
              label={"Password"}
              control={control}
              required
            />
            <br />
            <br />
            <PasswordRepeatElement
              name={"confirmPassword"}
              label={"Confirm Password"}
              control={control}
              required
              passwordFieldName="password"
            />
            <br/>
            <br/>
            <Button variant="contained" type={"submit"} sx={{ color: "#FFF" }}>
              Submit
            </Button>
          </FormContainer>
          <Typography variant="body1">Already have an account?</Typography>
          <Link to="/sign-in">Go To Sign In</Link>
        </Box>
      </Container>
    </>
  );
};

export default Register;
