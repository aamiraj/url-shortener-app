import React from "react";
import {
  FormContainer,
  TextFieldElement,
  PasswordElement,
} from "react-hook-form-mui";
import { Box, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}
const SignIn = () => {
  const formContext = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
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
            gap: "1rem"
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
            <Button variant="contained" type={"submit"} sx={{ color: "#FFF" }}>
              Submit
            </Button>
          </FormContainer>
          <Typography variant="body1">Don't have an account yet?</Typography>
          <Link to="/register">Go To Register</Link>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
